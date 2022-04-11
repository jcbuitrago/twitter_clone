import React from 'react';
import "./News.css"

function News({
    categoria,
    text,
    image
}) {
  return (
    <div className='news'>
        <div className='news__content'>
            <h2>{categoria}</h2>
            {text}
        </div>            
        <img src={image}/>
    </div>
  );
}

export default News;