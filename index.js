const express  = require('express');
const bodyParser = require ('body-parser');
const fs = require('fs');
const { exec } = require("child_process");


exec("npm start");
const { PORT = 3001, NODE_ENV } = process.env;
const app = express();
app.use(express.static('build'))
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(bodyParser.json());

app.post('/form', (req, res) => {
  fs.appendFile(`formdata.txt`, "\n" + JSON.stringify(req.body), (err) => {
    if(!err) res.send();
    else res.status(500).send();
  });

});

app.get('*', (req, res) => {res.sendFile('./build/index.html')})

app.listen(PORT, () => {
  console.log('server started at http://localhost:' + PORT);
});
