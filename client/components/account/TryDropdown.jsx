import React from 'react';

const TryDropdown = (props) => {
  return (
    <div className="v_account-section__try-dropdown v_dropdown">
      <div className="v_account-section__try-dropdown--container">
        <div className="v_account-section__try-dropdown--logo-container">
          <img
            className="v_account-section__try-dropdown--logo-container--image"
            src="images/prime-white.png"
            alt="prime icon"
          />
        </div>
        <div className="v_account-section__try-dropdown--text-container">
          <p className="v_account-section__try-dropdown--text-container--text">Enjoy fast, free shipping on</p>
          <p className="v_account-section__try-dropdown--text-container--text">over 100 million items when</p>
          <p className="v_account-section__try-dropdown--text-container--text">you start your 30-day free trial</p>
        </div>
        <div className="v_account-section__try-dropdown--button">Try Prime</div>
        <div className="v_account-section__try-dropdown--image-container">
          <img
            className="v_account-section__try-dropdown--image-container--image"
            src="images/fox.png"
            alt="fox icon"
          />
        </div>
      </div>
    </div>
  );
};

export default TryDropdown;
