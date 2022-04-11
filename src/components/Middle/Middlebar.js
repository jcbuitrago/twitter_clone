import React from 'react';
import "./Middlebar.css";
import Tweetbox from './Tweetbox';
import Post from './Post';
import Elonmusk from "./images/elonmusk.jpeg";
import Whoknows from "./images/whoknows.jpg";
import Trump from "./images/Trump.jpg";
import TrumpMeme from "./images/Trumpmeme.jpg";
import Toretomeme from "./images/Toretomeme.jpeg";
import Will from "./images/Will.jpg"

function Middlebar() {

  const postInfo=[
    {
      displayName:"ElonMusk",
      username:"realElon",
      verified:true,
      text:"My first tweet",
      avatar:Elonmusk,
      image:Whoknows
    },
    {
      displayName:"DonaldTrump",
      username:"TheFakeDonald",
      verified:false,
      text:"Bring down the wall!",
      avatar:Trump,
      image:TrumpMeme
    },
    {
      displayName:"WillSmith",
      username:"SlapPrince",
      verified:false,
      text:"Fastest hand of the west",
      avatar:Will,
      image:Toretomeme
    }
  ]

  const renderOptions = (postInfo) =>
    postInfo.map((option, index)=>
      <Post displayName={option.displayName} username={option.username} verified={option.verified} text={option.text} avatar={option.avatar} image={option.image} />
    )
  
  return (
    <div className='middlebar'>
        <div className='middlebar__header'>
          <h2>Home</h2>
          <Tweetbox />
        </div>
        <div className='middlebar__posts'>
          {renderOptions(postInfo)}
        </div>
    </div>
  );
}

export default Middlebar;