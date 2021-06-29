import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { Form as BootstrapForm, Button, Grid, Row, Col } from 'react-bootstrap';


import './form.css';


const Form = () => {
  const [formValues, setFormValues] = useState({});
  const onChange = useCallback((e) => { setFormValues({ ...formValues, [e.target.name]: e.target.value }) }, [formValues]);

  return (
    <div className="form1">
      <form onSubmit={(e) => {
        alert("Thank you, your information has been submitted!"); e.preventDefault(); postData('/form', formValues)
          .then(data => {
            // JSON data parsed by `response.json()` call
            window.location = '/'
          });
      }}>
        <BootstrapForm onSubmit={() => { console.log("test") }}>
          <BootstrapForm.Row>
            <BootstrapForm.Group as={Col} controlId="fullName">
              <BootstrapForm.Label>Full Name</BootstrapForm.Label>
              <BootstrapForm.Control name="fullName" type="name" placeholder="First Last" onChange={onChange} />
              <BootstrapForm.Text className="text-muted">
              </BootstrapForm.Text>
            </BootstrapForm.Group>

            <BootstrapForm.Group as={Col} controlId="BootstrapFormBasicEmail">
              <BootstrapForm.Label>Email Address</BootstrapForm.Label>
              <BootstrapForm.Control name="email" type="email" placeholder="name@example.com" onChange={onChange} />
              <BootstrapForm.Text className="text-muted">

              </BootstrapForm.Text>
            </BootstrapForm.Group>
          </BootstrapForm.Row>

          <BootstrapForm.Group controlId="person">
            <BootstrapForm.Label>I'm a ...</BootstrapForm.Label>
            <BootstrapForm.Control name="person" as="select" onChange={onChange}>
              <option>High school student or parent </option>
              <option>Miami Student</option>
              <option>Other College Student</option>
              <option>Other</option>
            </BootstrapForm.Control>
          </BootstrapForm.Group>

          <BootstrapForm.Group controlId="intent">
            <BootstrapForm.Label>I'm here for ...</BootstrapForm.Label>
            <BootstrapForm.Control name="intent" as="select" onChange={onChange}>
              <option>Summer Camp Information</option>
              <option>Joining a Team as a Player</option>
              <option>Other</option>
            </BootstrapForm.Control>
          </BootstrapForm.Group>

          <BootstrapForm.Group controlId="info">
            <BootstrapForm.Label>Please share any additional information about
        yourself!</BootstrapForm.Label>
            <BootstrapForm.Control name="info" as="textarea" rows="4" onChange={onChange} />
          </BootstrapForm.Group>

          <Button variant="primary" type="submit">
            Submit
      </Button>
        </BootstrapForm>
      </form>
    </div>
  );
}
ReactDOM.render(<Form />, document.getElementById('root'));
export default Form;

async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response; // parses JSON response into native JavaScript objects
}
