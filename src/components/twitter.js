import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import './twitter.css';

const Twitter = () => {
  return (
    <div className="timeline">
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="RedhawksGG"
        options={{ height: 400 }}
      />

    </div>

  );
}

export default Twitter;
