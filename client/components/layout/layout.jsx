import React from 'react';

import Account from '../account/account.jsx';
import Ad from '../ad/ad.jsx';
import Links from '../links/links.jsx';
import Location from '../location/location.jsx';;
import Logo from '../logo/logo.jsx';
import Search from '../Search/search.jsx';
import Sidebar from '../sidebar/sidebar.jsx';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar() {
    this.setState(state => ({
      isOpen: !state.isOpen,
    }));
  }

  render() {
    return (
      <div className="v_layout-main">
        {this.state.isOpen && <Sidebar toggleSidebar={this.toggleSidebar} />}
        <div className="v_nav-image-container">
          <img
            className="v_nav-image"
            src="https://s3-us-west-1.amazonaws.com/hack-reactor-victor/fec-images/nav_image.jpg"
            alt="nav icon"
          />
        </div>
        <div className="nav-container">
          <Logo toggleSidebar={this.toggleSidebar} />
          <Search />
          <Ad />
          <Location />
          <Links />
          <Account />
        </div>
      </div>
    );
  }
}

export default Layout;
