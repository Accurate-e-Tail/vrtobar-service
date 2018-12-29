import React from 'react';

const SidebarOverlay = props => (
  <div className="v_sidebar-overlay" onClick={props.toggleSidebar}>
    <p className="v_sidebar-overlay__button">X</p>
  </div>
);

export default SidebarOverlay;
