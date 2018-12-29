import React from 'react';

import SidebarOverlay from './SidebarOverlay.jsx';
import SidebarMenu from './SidebarMenu.jsx';

const Sidebar = props => (
  <div className="v_sidebar-section">
    <SidebarMenu toggleSidebar={props.toggleSidebar} />
    <SidebarOverlay toggleSidebar={props.toggleSidebar} />
  </div>
);

export default Sidebar;
