import React from 'react';

import TryDropdown from './TryDropdown.jsx';

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };

    this.onTryHover = this.onTryHover.bind(this);
  }

  onTryHover() {
    this.setState({ isHovered: true });
  }

  render() {
    return (
      <div className="v_account-section">
        <div className="v_account-section__divider" />
        <div className="v_account-section__holder">
          <div className="v_account-section__button">
            <p className="v_account-section__initial-text">Hello, Sign in</p>
            <div className="v_account-section__arrow-container">
              <p className="v_account-section__secondary-text">Account &amp; Lists</p>
              <i className="arrow-down" />
            </div>
          </div>
        </div>
        <div className="v_account-section__holder">
          <div className="v_account-section__button">
            <p className="v_account-section__secondary-text">Orders</p>
          </div>
        </div>
        <div className="v_account-section__holder v_account-section__try-container">
          <div className="v_account-section__button v_account-section__arrow-container">
            <p className="v_account-section__secondary-text" onMouseOver={this.onTryHover}>Try Prime</p>
            <i className="arrow-down" />
          </div>
          { this.state.isHovered && <TryDropdown />}
        </div>
        <div className="v_account-section__holder">
          <div className="v_account-section__button">
            <div className="v_account-section__cart">
              <div className="v_account-section__cart--image-container">
                <p className="v_account-section__cart--count">0</p>
                <img
                  className="v_account-section__cart--image"
                  src="images/cart.png"
                  alt="cart icon"
                />
              </div>
              <p className="v_account-section__cart--text">Cart</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
