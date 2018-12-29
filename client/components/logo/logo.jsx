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
        <p className="v_logo-section__text">amazon</p>
      </div>
      <div className="v_logo-section__try">
        <p className="v_logo-section__try--text">Try Prime</p>
      </div>
    </div>
  );
};

export default Logo;
