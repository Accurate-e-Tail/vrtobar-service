import React from 'react';

const Logo = (props) => {
  return (
    <div className="v_logo-section">
      <div className="v_logo-section__hamburger" onClick={props.toggleSidebar}>
        <div className="v_logo-section__hamburger--div"></div>
        <div className="v_logo-section__hamburger--div"></div>
        <div className="v_logo-section__hamburger--div"></div>
      </div>
      <div className="v_logo-section__logo">
        <div className="v_logo-section__logo--image-container">
          <img
            src="https://s3-us-west-1.amazonaws.com/hack-reactor-victor/fec-images/logo.png"
            alt="logo icon"
            className="v_logo-section__logo--image-container--image"
          />
        </div>
      </div>
      <div className="v_logo-section__try">
        <p className="v_logo-section__try--text">Try Prime</p>
      </div>
    </div>
  );
};

export default Logo;
