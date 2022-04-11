import React from 'react';
import "./Tweetbox.css";
import { BsImageFill } from "react-icons/bs";
import {AiOutlineGif} from "react-icons/ai";
import {IoStatsChart} from "react-icons/io5";
import {BiSmile} from "react-icons/bi";
import {BsFillCalendarCheckFill} from "react-icons/bs";
import {HiOutlineLocationMarker} from "react-icons/hi";

function Tweetbox() {
  return (
    <div className='tweetBox'>
      <div className="tweetBox__input">
          <input placeholder="What's happening?" />
      </div>
      <div>
        <div className='tweetBox_options'>
          <BsImageFill className='tweetBox_optionsIcon' size="20"/>
          <AiOutlineGif className='tweetBox_optionsIcon' size="20"/>
          <IoStatsChart className='tweetBox_optionsIcon'size="20"/>
          <BiSmile className='tweetBox_optionsIcon' size="20"/>
          <BsFillCalendarCheckFill className='tweetBox_optionsIcon' size="20"/>
          <HiOutlineLocationMarker className='tweetBox_optionsIcon' size="20"/>
        </div>
        <button className='tweetBox__tweetButton'>Tweet</button>
      </div>
    </div>
  );
}

export default Tweetbox;