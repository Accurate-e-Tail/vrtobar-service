import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: ['All Departments'],
      selectValue: '',
    };
    this.onSelectChange = this.onSelectChange.bind(this);
  }

  componentDidMount() {
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

  onSelectChange(e) {
    console.log(e.target.value);
    this.setState({ selectValue: e.target.value });
  }

  render() {
    const categoriesJSX = this.state.categories.map((category) => {
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
          <input className="v_search-section__query" type="text" name="query" />
          <div className="v_search-section__button" type="button">
            <img src="images/search.png" className="v_search-section__button-image" alt="search icon" />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
