import React from 'react';

const Account = (props) => {
  return (
    <div className="v_account-section">
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
      <div className="v_account-section__holder">
        <div className="v_account-section__button v_account-section__arrow-container">
          <p className="v_account-section__secondary-text">Try Prime</p>
          <i className="arrow-down" />
        </div>
      </div>
      <div className="v_account-section__holder">
        <div className="v_account-section__button">
          <p className="v_account-section__secondary-text">Cart</p>
        </div>
      </div>
    </div>
  );
};

export default Account;
