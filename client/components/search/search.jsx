import React from 'react';

const Search = (props) => {
  return (
    <div className="v_search-section">
      <div className="v_search-section__wrapper">
        <select className="v_search-section__select" type="select" name="category">
          <option className="v_search-section__select--option" value="all">All Departments</option>
          <option className="v_search-section__select--option" value="books">Books</option>
          <option className="v_search-section__select--option" value="electronics">Electronics</option>
          <option className="v_search-section__select--option" value="clothes">Clothes</option>
          <option className="v_search-section__select--option" value="shoes">Shoes</option>
          <option className="v_search-section__select--option" value="games">Games</option>
        </select>
        <i className="arrow-down v_search-section__arrow" />
        <input className="v_search-section__query" type="text" name="query" />
        <div className="v_search-section__button" type="button">
          <img src="images/search.png" className="v_search-section__button-image" alt="search icon" />
        </div>
      </div>
    </div>
  );
};

export default Search;
