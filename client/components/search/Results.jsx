import React from 'react';

const Results = (props) => {
  let itemsJSX;
  if (props.products.length > 0) {
    itemsJSX = props.products.slice(0, 10).map((product) => {
      return (
        <li className="v_search-section__results--item">{product.name}</li>
      );
    });
  } else {
    itemsJSX = (
      <li className="v_search-section__results--item">Sorry, no products found.</li>
    );
  }

  return (
    <React.Fragment>
      <ul className="v_search-section__results">
        {itemsJSX}
      </ul>
    </React.Fragment>
  );
};

export default Results;
