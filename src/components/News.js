import React from 'react';
import "./News.css"

function News({
    categoria,
    text,
    image
}) {
  return (
    <div className='news'>
        <div className='news__header'>
            {categoria}
        </div>
        <div className='news__content'>
            {text}
            <img src={image} className="news__image"/>
        </div>
    </div>
  );
}

export default News;