import React from "react";
import './Leftbar.css';

import Twitterlogo from "@material-ui/icons/Twitter";
import home_logo from "@material-ui/icons/Home";
import explore_logo from "@material-ui/icons/Search";
import notifications_logo from "@material-ui/icons/NotificationsNone";
import messages_logo from "@material-ui/icons/MailOutline";
import profile_logo from "@material-ui/icons/PermIdentity";
import more_logo from "@material-ui/icons/MoreHoriz";
import lists_logo from "@material-ui/icons/ListAlt";
import bookmark_logo from "@material-ui/icons/BookmarkBorder";
import LeftbarOption from "./LeftbarOption";
// import { render } from "@testing-library/react";

function Leftbar() {

    const optionsBar=[
      {
        text:"Explore",
        icon:explore_logo
      },    
      {
        text:"Notifications",
        icon:notifications_logo
      },
      {
        text:"Messages",
        icon:messages_logo
      },
      {
        text:"Bookmarks",
        icon:bookmark_logo
      },
      {
        text:"Lists",
        icon:lists_logo
      },
      {
        text:"Profile",
        icon:profile_logo
      },
      {
        text:"More",
        icon:more_logo
      }
    ]
    
    const renderOptions = (optionsBar) =>
      optionsBar.map((option,index)=>
        <LeftbarOption text={option.text} Icon={option.icon}/>
      )
    
    return (
      <div className="leftbar">
        <Twitterlogo className="leftbar__twitterIcon" />

        <LeftbarOption active text="Home" Icon={home_logo}/>       
        {renderOptions(optionsBar)}

        <button className="leftbar__tweet">
          Tweet
        </button>
      </div>
    );
  }
  

export default Leftbar;