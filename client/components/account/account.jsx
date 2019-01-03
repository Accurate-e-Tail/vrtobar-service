import React from 'react';

import TryDropdown from './TryDropdown.jsx';
import AccountDropdown from './AccountDropdown.jsx';

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTryHovered: false,
      isAccountHovered: false,
      cartCount: 0,
    };

    this.onTryHover = this.onTryHover.bind(this);
    this.toggleHover = this.toggleHover.bind(this);
    this.onAccountHover = this.onAccountHover.bind(this);
    this.toggleAccountHover = this.toggleAccountHover.bind(this);
  }

  componentDidMount() {
    // Fetch cart count
    setInterval(() => {
      fetch('http://localhost:3002/cart')
        .then(resData => resData.json())
        .then((data) => {
          this.setState({ cartCount: data.length });
        })
        .catch((err) => {
          console.log(err);
        });
    }, 1000);
  }

  onTryHover() {
    this.props.toggleOverlay();
    this.setState({ isTryHovered: true });
  }

  onAccountHover() {
    this.props.toggleOverlay();
    this.setState({ isAccountHovered: true });
  }

  toggleAccountHover() {
    this.props.toggleOverlay();
    this.setState(state => ({
      isAccountHovered: !state.isAccountHovered,
    }));
  }

  toggleHover() {
    this.props.toggleOverlay();
    this.setState(state => ({
      isTryHovered: !state.isTryHovered,
    }));
  }

  render() {
    return (
      <React.Fragment>
        <div className="v_account-section">
          <div className="v_account-section__divider" />
          <div className="v_account-section__holder v_account-section__account-container">
            <div className="v_account-section__button" onMouseOver={this.onAccountHover} onMouseLeave={this.toggleAccountHover}>
              <p className="v_account-section__initial-text">Hello, Sign in</p>
              <div className="v_account-section__arrow-container">
                <p className="v_account-section__secondary-text">Account &amp; Lists</p>
                <i className="arrow-down" />
              </div>
              { this.state.isAccountHovered && <AccountDropdown toggleDropdown={this.toggleAccountHover} />}
            </div>
          </div>
          <div className="v_account-section__holder">
            <div className="v_account-section__button">
              <p className="v_account-section__secondary-text">Orders</p>
            </div>
          </div>
          <div className="v_account-section__holder v_account-section__try-container">
            <div className="v_account-section__button v_account-section__arrow-container" onMouseLeave={this.toggleHover}>
              <p className="v_account-section__secondary-text" onMouseOver={this.onTryHover}>Try Prime</p>
              <i className="arrow-down" />
              { this.state.isTryHovered && <TryDropdown toggleDropdown={this.toggleHover} />}
            </div>
          </div>
          <div className="v_account-section__holder">
            <div className="v_account-section__button">
              <div className="v_account-section__cart">
                <div className="v_account-section__cart--image-container">
                  <p className="v_account-section__cart--count">{this.state.cartCount}</p>
                  <img
                    className="v_account-section__cart--image"
                    src="https://s3-us-west-1.amazonaws.com/hack-reactor-victor/fec-images/cart.png"
                    alt="cart icon"
                  />
                </div>
                <p className="v_account-section__cart--text">Cart</p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Account;
