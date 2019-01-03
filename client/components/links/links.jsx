import React from 'react';

import LanguageDropdown from './LanguageDropdown.jsx';

class Links extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLangHovered: false,
    };

    this.onLangHover = this.onLangHover.bind(this);
    this.onLangHoverLeave = this.onLangHoverLeave.bind(this);
  }

  onLangHover() {
    this.props.toggleOverlay();
    this.setState({ isLangHovered: true });
  }

  onLangHoverLeave() {
    this.props.toggleOverlay();
    this.setState(state => ({
      isLangHovered: false,
    }));
  }

  render() {
    return (
      <React.Fragment>
        <div className="v_links-section">
          <ul className="v_links-section__list">
            <li className="v_links-section__item"><a href="#">Your Amazon.com</a></li>
            <li className="v_links-section__item"><a href="#">Last-Minute Deals</a></li>
            <li className="v_links-section__item"><a href="#">Gift Cards</a></li>
            <li className="v_links-section__item"><a href="#">Whole Foods</a></li>
            <li className="v_links-section__item"><a href="#">Registry</a></li>
            <li className="v_links-section__item"><a href="#">Sell</a></li>
            <li className="v_links-section__item"><a href="#">Help</a></li>
          </ul>
          <div className="v_links-section__lang"
            onMouseEnter={this.onLangHover}
            onMouseLeave={this.onLangHoverLeave}
          >
            <div className="v_links-section__lang--text">EN</div>
            <div className="v_links-section__lang--bottom">
              <div className="v_links-section__lang--image-container">
                <img
                  className="v_links-section__lang--image"
                  src="https://s3-us-west-1.amazonaws.com/hack-reactor-victor/fec-images/globe.png"
                  alt="globe icon"
                />
              </div>
              <i className="arrow-down" />
            </div>
            { this.state.isLangHovered && <LanguageDropdown /> }
          </div>
        </div>
        {/* { this.state.isLangHovered && <Overlay /> } */}
      </React.Fragment>
    );
  }
}

export default Links;
