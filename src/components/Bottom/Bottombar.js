import React from 'react';
import "./Bottombar.css";
import SearchIcon from "@material-ui/icons/Search";
import News from "./News.js";
import Lecrec from "./images/Leclerc.jpg";
import Fico from "./images/ficopetro.jpg";
import Residente from "./images/Residente.jpg"

function Rightbar() {
  const newsBar=[
    {
      categoria:"Sports",
      text:"Lecrec win Bahrain GP! Magnussen fith, RedBull OUT!!!",
      image:Lecrec
    },
    {
      categoria:"Política",
      text:"Adivina quien?!",
      image:Fico
    },
    {
      categoria:"Música",
      text:"JBalvin genera 1000 empleos para escribirle respuesta a Residente",
      image:Residente
    }

  ]

  const renderOptions = (newsBar) =>
    newsBar.map((option, index)=>
      <News categoria={option.categoria} text={option.text} image={option.image} />
    )

  return (
    <div className='bottombar'>
        <div className='bottombar__input'>
          <SearchIcon className='bottombar__searchIcon' />
          <input placeholder='Search Twitter' type="text" />
        </div>
        <div className='bottombar__widgetContainer'>
          <h2>What's happening</h2>
          {renderOptions(newsBar)}
        </div>
        
    </div>
  );
}

export default Rightbar;