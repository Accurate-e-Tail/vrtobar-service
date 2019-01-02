import React from 'react';

const LanguageDropdown = (props) => {
  return (
    <div className="v_links-section__lang-dropdown v_dropdown">
      <div className="v_links-section__lang-dropdown--container">
        <div className="test">
          <input className="v_links-section__lang-dropdown--container--item" type="radio" checked name="lang" value="en" />
          <span className="v_links-section__lang-dropdown--container--text">English - EN</span>
        </div>
        <div>
          <input className="v_links-section__lang-dropdown--container--item" type="radio" name="lang" value="es" />
          <span className="v_links-section__lang-dropdown--container--text">Español - ES</span>
        </div>
        <a className="v_links-section__lang-dropdown--container--link">Learn More</a>
      </div>
    </div>
  );
};

export default LanguageDropdown;
