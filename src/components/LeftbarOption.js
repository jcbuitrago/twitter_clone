import React from 'react';
import "./LeftbarOption.css";

function LeftbarOption({active, text, Icon}) {
  return (
    <div className={`leftbarOption ${active && 'leftbarOption--active'}`}>
        <Icon />
        <h2>
            {text}
        </h2>
    </div>
  );
}

export default LeftbarOption;