import React from 'react';
import './About.css';
import Footer from '../components/footer.js';
function About() {
  return (
    <div>


      <div className="meet">
        Meet Our Faculty
      </div>

      <div className="pictures1">
        <img className='fpic1' src="/Pics/PHILL.png" alt="Phill Alexander" />
        <img className='fpic1' src="/Pics/CHAD.png" alt="Chad Reynolds" />
        <img className='fpic1' src="/Pics/GLENN.png" alt="Glenn Platt" />
        <img className='fpic1' src="/Pics/JAROD.png" alt="Jarod Haney" />
      </div>
      <div className="Abouttitle">
        A Little More About Us

</div>
      <div className="sidenav">

        <a href="https://miamioh.edu/news/top-stories/2018/07/esports-growing-at-miami.html" target="_blank">Esports @ Miami</a>|
         <a href="https://miamioh.edu/news/top-stories/2017/09/esports-arena.html" target="_blank">Esports Arena</a>|
         <a href="https://miamioh.edu/cca/academics/departments/etbd/index.html" target="_blank">ETBD @ Miami</a>|
         <a href="https://www.miamioh.edu/cca/academics/departments/etbd/games-simulation/esports-camp/index.html" target="_blank">Summer Esports camps</a>


      </div>
      <Footer />
    </div>
  );


}


export default About;
