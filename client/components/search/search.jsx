import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: ['All Departments'],
      selectValue: 'All Departments',
      queryValue: '',
    };
    this.onSelectChange = this.onSelectChange.bind(this);
    this.onQueryChange = this.onQueryChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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

  onSubmit() {
    // Query server
    fetch(`http://localhost:3003/products/${this.state.selectValue}/${this.state.queryValue}`)
      .then(resData => resData.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onQueryChange(e) {
    const queryValue = e.target.value;
    this.setState({ queryValue });
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
          />
          <div
            className="v_search-section__button"
            type="button"
            onClick={this.onSubmit}
          >
            <img src="images/search.png" className="v_search-section__button-image" alt="search icon" />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
