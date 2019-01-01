import React from 'react';

import Dropdown from '../shared/Dropdown.jsx';

class TryDropdown extends Dropdown {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="v_account-section__try-dropdown v_dropdown">
        <div className="v_account-section__try-dropdown--container">
          <div className="v_account-section__try-dropdown--logo"></div>
          <div className="v_account-section__try-dropdown--text-container">
            <p className="v_account-section__try-dropdown--text-container--text">Enjoy fast, free shipping on</p>
            <p className="v_account-section__try-dropdown--text-container--text">over 100 million items when</p>
            <p className="v_account-section__try-dropdown--text-container--text">you start your 30-day free trial</p>
          </div>
          <div className="v_account-section__try-dropdown--button">Try Prime</div>
          <div className="v_account-section__try-dropdown--image"></div>
        </div>
      </div>
    );
  }
}

export default TryDropdown;
