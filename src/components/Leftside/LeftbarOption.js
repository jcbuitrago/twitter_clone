import React from 'react';
import "./LeftbarButtons.css";

function LeftbarButtons({ text }) {
  return (
    <div className="leftbarButtons" >
        <h2>
            {text}
        </h2>
    </div>
  );
}

export default LeftbarButtons;