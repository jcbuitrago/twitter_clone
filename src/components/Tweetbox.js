import React from 'react';
import "./Tweetbox.css";
import ImageIcon from '@material-ui/icons/Image';
import PollIcon from '@material-ui/icons/Poll';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import EventNoteIcon from '@material-ui/icons/EventNote';
import AddLocationIcon from '@material-ui/icons/AddLocation';

function Tweetbox() {
  return (
    <div className='tweetBox'>
        <form>
            <div className="tweetBox__input">
                <img className="tweetBox__avatar" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
                <input placeholder="What's happening?" />
            </div>
            <div>
              <div className='tweetBox_options'>
                <ImageIcon className='tweetBox_optionsIcon'/>
                <PollIcon className='tweetBox_optionsIcon'/>
                <SentimentSatisfiedAltIcon className='tweetBox_optionsIcon'/>
                <EventNoteIcon className='tweetBox_optionsIcon'/>
                <AddLocationIcon className='tweetBox_optionsIcon'/>
                <button className='tweetBox__tweetButton'>Tweet</button>
              </div>
            </div>
        </form>
    </div>
  );
}

export default Tweetbox;