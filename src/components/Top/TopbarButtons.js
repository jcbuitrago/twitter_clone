import React from 'react';
import "./TopbarButtons.css";

function TopbarButtons({ text }) {
  return (
    <div className="topbarButtons" >
        <h2>
            {text}
        </h2>
    </div>
  );
}

export default TopbarButtons;