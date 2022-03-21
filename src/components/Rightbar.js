import React from 'react';
import "./Rightbar.css";
import SearchIcon from "@material-ui/icons/Search";
import News from "./News.js";
import Lecrec from "./images/Leclerc.jpg"

function Rightbar() {
  const newsBar=[
    {
      categoria:"Sports",
      text:"Lecrec win Bahrain GP! Magnussen fith, RedBull OUT!!!",
      image:Lecrec
    },
    {
      categoria:"Sports",
      text:"Lecrec win Bahrain GP!",
      image:Lecrec
    },
    {
      categoria:"Sports",
      text:"Lecrec win Bahrain GP!",
      image:Lecrec
    }

  ]

  const renderOptions = (newsBar) =>
    newsBar.map((option, index)=>
      <News categoria={option.categoria} text={option.text} image={option.image} />
    )

  return (
    <div className='rightbar'>
        <div className='rightbar__input'>
          <SearchIcon className='rightbar__searchIcon' />
          <input placeholder='Search Twitter' type="text" />
        </div>
        <div className='rightbar__widgetContainer'>
          <h2>What's happening</h2>
          {renderOptions(newsBar)}
        </div>
        
    </div>
  );
}

export default Rightbar;