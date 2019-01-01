import React from 'react';
import _ from 'lodash';

import Results from './Results.jsx';
import Overlay from '../shared/Overlay.jsx';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: ['All Departments'],
      selectValue: 'All Departments',
      queryValue: '',
      searchResults: [],
      queryFocused: false,
    };
    this.onSelectChange = this.onSelectChange.bind(this);
    this.onQueryChange = this.onQueryChange.bind(this);
    this.onSubmit = _.throttle(this.onSubmit.bind(this), 500);
    this.onQueryFocusIn = this.onQueryFocusIn.bind(this);
    this.onQueryFocusOut = this.onQueryFocusOut.bind(this);
  }

  componentDidMount() {
    // Fetch categories
    fetch('http://localhost:3003/categories')
      .then(resData => resData.json())
      .then((data) => {
        const newCategories = data.categories.map(
          category => category.category[0].toUpperCase() + category.category.slice(1)
        );
        newCategories.unshift('All Departments');
        this.setState({ categories: newCategories });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onSubmit(query) {
    // Query server
    if (query !== '') {
      fetch(`http://localhost:3003/products/${this.state.selectValue}/${query}`)
        .then(resData => resData.json())
        .then((data) => {
          console.log(data);
          this.setState({ searchResults: data.products });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  onQueryChange(e) {
    const queryValue = e.target.value;
    this.setState((state) => {
      this.onSubmit(queryValue);
      return { queryValue };
    });
  }

  onQueryFocusIn(e) {
    this.setState({ queryFocused: true });
  }

  onQueryFocusOut(e) {
    this.setState({ queryFocused: false });
  }

  onSelectChange(e) {
    this.setState({ selectValue: e.target.value });
  }

  render() {
    const categoriesJSX = this.state.categories.map((category, index) => {
      return (
        <option className="v_search-section__select--option" value={category}>{category}</option>
      );
    });

    return (
      <React.Fragment>
        <div className="v_search-section">
          <div className="v_search-section__wrapper">
            <select
              className="v_search-section__select"
              type="select"
              name="category"
              value={this.state.selectValue}
              onChange={this.onSelectChange}
            >
              {categoriesJSX}
            </select>
            <i className="arrow-down v_search-section__arrow" />
            <input
              className="v_search-section__query"
              type="text"
              name="query"
              onChange={this.onQueryChange}
              value={this.state.queryValue}
              onFocus={this.onQueryFocusIn}
              onBlur={this.onQueryFocusOut}
            />
            <div
              className="v_search-section__button"
              type="button"
            >
              <img src="images/search.png" className="v_search-section__button-image" alt="search icon" />
            </div>
          </div>
          { this.state.queryFocused && <Results products={this.state.searchResults} /> }
        </div>
        { this.state.queryFocused && <Overlay />}
      </React.Fragment>
    );
  }
}

export default Search;
