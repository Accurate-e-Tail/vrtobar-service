import React from 'react';

import SidebarSubMenu from './SidebarSubMenu.jsx';
import LIST_ITEMS from './menus.json';

class SidebarMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmenuOpen: false,
      subMenuIndex: null,
      subMenuItemIndex: null,
    };
    this.listItemClicked = this.listItemClicked.bind(this);
    this.backClickHandler = this.backClickHandler.bind(this);
  }

  backClickHandler() {
    this.setState({ isSubmenuOpen: false });
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
          <React.Fragment>
            <SidebarSubMenu listItemClicked={this.listItemClicked} subMenuIndex={index} subMenu={subMenu} />
          </React.Fragment>
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
          {this.state.isSubmenuOpen && 
            <li className="v_sidebar-menu__list-back" onClick={this.backClickHandler}>-- MAIN MENU</li>
          }
          {menuItemsJSX}
        </div>
      </div>
    );
  }
}

export default SidebarMenu;
