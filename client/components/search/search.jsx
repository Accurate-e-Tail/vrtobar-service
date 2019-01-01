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
    this.onProductClick = this.onProductClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    // Setup listener for dropdown cliks
    document.addEventListener('mousedown', this.handleOutsideClick, false);

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

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOutsideClick, false);
  }

  
  onProductClick(e, id) {
    console.log(`Redirect: Product id = ${id}`);
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
    } else {
      this.setState({ searchResults: [] });
    }
  }
  
  onQueryChange(e) {
    const queryValue = e.target.value;
    this.setState((state) => {
      this.onSubmit(queryValue);
      if (queryValue === '') {
        return { queryValue, searchResults: [] };
      }
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

  handleOutsideClick(e) {
    if (this.container.contains(e.target)) {
      return;
    }

    this.setState({ queryFocused: false });
  }

  render() {
    const categoriesJSX = this.state.categories.map((category, index) => {
      return (
        <option className="v_search-section__select--option" key={category} value={category}>{category}</option>
      );
    });

    return (
      <React.Fragment>
        <div className="v_search-section" ref={node => this.container = node}>
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
            />
            <div
              className="v_search-section__button"
              type="button"
            >
              <img src="images/search.png" className="v_search-section__button-image" alt="search icon" />
            </div>
          </div>
          { this.state.queryFocused && <Results products={this.state.searchResults} onProductClick={this.onProductClick} /> }
        </div>
        { this.state.queryFocused && <Overlay />}
      </React.Fragment>
    );
  }
}

export default Search;
