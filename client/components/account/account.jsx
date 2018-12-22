import React from 'react';

const Account = (props) => {
  return (
    <div className="v_account-section">
      <div className="v_account-section__button">
        <p className="v_account-section__initial-text">Hello, Sign in</p>
        <p>Account &amp; Lists</p>
      </div>
      <div className="v_account-section__button">Orders</div>
      <div className="v_account-section__button">Try Prime</div>
      <div className="v_account-section__button">Cart</div>
    </div>
  );
};

export default Account;
