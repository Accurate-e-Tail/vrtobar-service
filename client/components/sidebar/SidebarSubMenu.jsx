import React from 'react';

const SidebarSubMenu = (props) => {
  // header
  let headerJSX;

  if (props.subMenu.header) {
    headerJSX = <li className="v_sidebar-section__submenu--header">{props.subMenu.header}</li>;
  }

  // list items
  let itemsJSX = props.subMenu.items.map((item, index) => {
    return (
      <li
        className="v_sidebar-section__submenu--item"
        itemIndex={index}
        subMenuIndex={props.subMenuIndex}
        onClick={props.listItemClicked}
      >
        {item.value || item}
      </li>
    );
  });

  return (
    <div className="v_sidebar-section__submenu">
      {headerJSX}
      {itemsJSX}
    </div>
  );
};

export default SidebarSubMenu;
