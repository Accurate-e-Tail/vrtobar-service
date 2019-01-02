import React from 'react';

const SidebarOverlay = props => (
  <div className="v_sidebar-overlay" onClick={props.toggleSidebar}>
    <div className="v_sidebar-overlay__image-container">
      <img
        className="v_sidebar-overlay__image-container--image"
        src="https://s3-us-west-1.amazonaws.com/hack-reactor-victor/fec-images/close.png"
        alt="close icon"
      />
    </div>
  </div>
);

export default SidebarOverlay;
