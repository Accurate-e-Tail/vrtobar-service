import React from 'react';

import SidebarSubMenu from './SidebarSubMenu.jsx';
import LIST_ITEMS from './menus.json';
// const LIST_ITEMS = [
//   {
//     header: 'SHOP BY CATEGORY',
//     items: [
//       'Prime Video', 'Amazon Music', 'Echo & Alexa', 'FireTablets', 'Fire TV',
//       'Kindle E-readers & Books', 'Appstore for Android',
//     ],
//   },
//   {
//     items: [
//       'Clothing, Shoes, Jewelry & Watches', 'AmazonFresh', 'Books & Audible', 'Movies, Music & Games',
//       'Electronics, Computers & Office', 'Alexa Smart Home', 'Home, Garden & Tools', 'Pet Supplies',
//       'Restaurants, Food & Grocery', 'Beauty & Health', 'Toys, Kids & Baby', 'Handmade',
//       'Sports & Outdoors', 'Automotive & Industrial',
//     ],
//   },
//   {
//     items: [
//       'Whole Foods Market', 'Make Money with Amazon', 'Home Services', 'Credit & Payment Products',
//       'Amazon Launchpad', 'Amazon Exclusives', 'Subscribe with Amazon', 'Treasure Truck',
//       'International Shopping', 'Amazon Photos & Prints', 'Small & Medium Business', 'Full Store Directory',
//     ],
//   },
//   {
//     header: 'HELP & SETTINGS',
//     items: ['Your Account', 'English', 'United States', 'Help', 'Sign In'],
//   },
// ];

class SidebarMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmenuOpen: false,
      subMenuIndex: null,
      subMenuItemIndex: null,
    };
    this.listItemClicked = this.listItemClicked.bind(this);
  }

  listItemClicked(e) {
    console.log(e.target.attributes.subMenuIndex.value);
    console.log(e.target.attributes.itemIndex.value);
    const subMenuIndex = e.target.attributes.subMenuIndex.value;
    const subMenuItemIndex = e.target.attributes.itemIndex.value;

    // check if it has submenu
    this.setState((state) => {
      return {
        isSubmenuOpen: LIST_ITEMS[subMenuIndex].items[subMenuItemIndex].subItems !== undefined,
        subMenuIndex,
        subMenuItemIndex,
      };
    });
  }

  render() {
    let menuItemsJSX;
    if (this.state.isSubmenuOpen) {
      menuItemsJSX = LIST_ITEMS[this.state.subMenuIndex].items[this.state.subMenuItemIndex].subItems.map((subMenu, index) => {
        return (
          <SidebarSubMenu listItemClicked={this.listItemClicked} subMenuIndex={index} subMenu={subMenu} />
        );
      });
    } else {
      menuItemsJSX = LIST_ITEMS.map((subMenu, index) => {
        return (
          <SidebarSubMenu listItemClicked={this.listItemClicked} subMenuIndex={index} subMenu={subMenu} />
        );
      });
    }

    return (
      <div className="v_sidebar-menu">
        <div className="v_sidebar-menu__header">
          <p className="v_sidebar-menu__header--text">Hello. Sign in</p>
        </div>
        <div className="v_sidebar-menu__list">
          {this.state.isSubmenuOpen && <li className="v_sidebar-list__list-back">-- Main Menu</li>}
          {menuItemsJSX}
        </div>
      </div>
    );
  }
}

export default SidebarMenu;
