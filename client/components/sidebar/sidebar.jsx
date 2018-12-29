import React from 'react';

import SidebarOverlay from './SidebarOverlay.jsx';
import SidebarList from './SidebarList.jsx';

const Sidebar = props => (
  <div className="v_sidebar-section">
    <SidebarList toggleSidebar={props.toggleSidebar} />
    <SidebarOverlay toggleSidebar={props.toggleSidebar} />
  </div>
);

export default Sidebar;
