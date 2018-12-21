import React from 'react';

import Account from '../account/account.jsx';
import Ad from '../ad/ad.jsx';
import Links from '../links/links.jsx';
import Location from '../location/location.jsx';;
import Logo from '../logo/logo.jsx';
import Search from '../Search/Search.jsx';

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="v_layout-main">
        <div className="v_nav-image-container"><img className="v_nav-image" src="images/nav_image.jpg"></img></div>
        <div className="nav-container">
          <Logo />
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
