import React from 'react';

const SidebarOverlay = props => (
  <div className="v_sidebar-overlay" onClick={props.toggleSidebar}>
    <div className="v_sidebar-overlay__image-container">
      <img
        className="v_sidebar-overlay__image-container--image"
        src="images/close.png"
        alt="close icon"
      />
    </div>
    {/* <p className="v_sidebar-overlay__button">X</p> */}
  </div>
);

export default SidebarOverlay;
