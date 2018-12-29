import React from 'react';

import SidebarSublist from './SidebarSublist.jsx';

const LIST_ITEMS = [
  {
    header: 'SHOP BY CATEGORY',
    items: [
      'Prime Video', 'Amazon Music', 'Echo & Alexa', 'FireTablets', 'Fire TV',
      'Kindle E-readers & Books', 'Appstore for Android',
    ],
  },
  {
    items: [
      'Clothing, Shoes, Jewelry & Watches', 'AmazonFresh', 'Books & Audible', 'Movies, Music & Games',
      'Electronics, Computers & Office', 'Alexa Smart Home', 'Home, Garden & Tools', 'Pet Supplies',
      'Restaurants, Food & Grocery', 'Beauty & Health', 'Toys, Kids & Baby', 'Handmade',
      'Sports & Outdoors', 'Automotive & Industrial',
    ],
  },
  {
    items: [
      'Whole Foods Market', 'Make Money with Amazon', 'Home Services', 'Credit & Payment Products',
      'Amazon Launchpad', 'Amazon Exclusives', 'Subscribe with Amazon', 'Treasure Truck',
      'International Shopping', 'Amazon Photos & Prints', 'Small & Medium Business', 'Full Store Directory',
    ],
  },
  {
    header: 'HELP & SETTINGS',
    items: ['Your Account', 'English', 'United States', 'Help', 'Sign In'],
  },
];

class SidebarList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmenuOpen: false,
    };
  }

  render() {
    const menuItemsJSX = LIST_ITEMS.map((subMenu) => {
      return (
        <SidebarSublist subMenu={subMenu} />
      );
    });

    return (
      <div className="v_sidebar-list">
        <div className="v_sidebar-list__header">
          <p>Hello. Sign in</p>
        </div>
        <div className="v_sidebar-list__list">
          {this.state.isSubmenuOpen && <li className="v_sidebar-list__list-back">-- Main Menu</li>}
          {menuItemsJSX}
        </div>
      </div>
    );
  }
}

export default SidebarList;
