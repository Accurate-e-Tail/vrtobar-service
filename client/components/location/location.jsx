import React from 'react';

const Location = (props) => {
  return (
    <div className="v_location-section">
      <div className="v_location-section__button">
        <div className="v_location-section__image-container">
          <img
            src="images/location.png"
            alt="location icon"
            className="v_location-section__image-container--image"
          />
        </div>
        <div className="v_location-section__info">
          <p className="v_location-section__info--initial-text">Deliver to</p>
          <p className="v_location-section__info--secondary-text">Daly City 94014</p>
        </div>
      </div>
    </div>
  );
};

export default Location;
