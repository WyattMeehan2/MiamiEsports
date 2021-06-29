import React from 'react';

import VideoPlayer from '../components/videoPlayer.js';
import Background from '../components/background.js';
import './Home.css';
import Twitter from '../components/twitter.js';
import Footer from '../components/footer.js';


function Home() {
  return (
    <div className="row">
      <VideoPlayer />
      <div className="column">

      </div>
      <div className="column">
        <Twitter />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
