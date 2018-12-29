import React from 'react';

const SidebarSublist = (props) => {
  let headerJSX;

  if (props.subMenu.header) {
    headerJSX = <li>{props.subMenu.header}</li>;
  }
  let itemsJSX = props.subMenu.items.map((item) => {
    return (
      <li>{item}</li>
    );
  });

  return (
    <div className="v_sidebar-section__sublist">
      {headerJSX}
      {itemsJSX}
    </div>
  );
};

export default SidebarSublist;
