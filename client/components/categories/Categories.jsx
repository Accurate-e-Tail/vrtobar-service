import React from 'react';

class Categories extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="v_categories-section">
        <ul className="v_categories-section__list">
          <li className="v_categories-section__list--item">All Electronics</li>
          <li className="v_categories-section__list--item">Deals</li>
          <li className="v_categories-section__list--item">Best Sellers</li>
          <li className="v_categories-section__list--item">TV &amp; Video</li>
          <li className="v_categories-section__list--item">Audio &amp; Home Theater</li>
          <li className="v_categories-section__list--item">Computers</li>
          <li className="v_categories-section__list--item">Camera &amp; Photo</li>
          <li className="v_categories-section__list--item">Wearable Technology</li>
          <li className="v_categories-section__list--item">Car Electronics &amp; GPS</li>
          <li className="v_categories-section__list--item">Portable Audio</li>
          <li className="v_categories-section__list--item">Cell Phones</li>
          <li className="v_categories-section__list--item">Office Electronics</li>
          <li className="v_categories-section__list--item">Musical Instruments</li>
        </ul>
      </div>
    );
  }
}

export default Categories;
