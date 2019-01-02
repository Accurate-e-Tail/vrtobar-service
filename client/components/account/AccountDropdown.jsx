import React from 'react';

const AccountDropdown = (props) => {
  return (
    <div className="v_account-section__account-dropdown v_dropdown">
      <div className="v_account-section__account-dropdown--container">
        <div className="v_account-section__account-dropdown--signin-container">
          <div className="v_account-section__account-dropdown--signin-container--button">Sign in</div>
          <p className="v_account-section__account-dropdown--signin-container--text">
            New customer?
            <a className="v_account-section__account-dropdown--signin-container--link" href="#">Start here.</a>
          </p>
        </div>
        <div className="v_account-section__account-dropdown--lists-container">
          <div className="v_account-section__account-dropdown--lists-container--list">
            <p className="v_account-section__account-dropdown--lists-container--list--header">Your Lists</p>
            <ul className="v_account-section__account-dropdown--lists-container--list--list">
              <li className="v_account-section__account-dropdown--lists-container--list--item">Create a List</li>
              <li className="v_account-section__account-dropdown--lists-container--list--item">Find a List or Registry</li>
              <li className="v_account-section__account-dropdown--lists-container--list--item">Find a Gift</li>
              <li className="v_account-section__account-dropdown--lists-container--list--item">Save Items from the Web</li>
              <li className="v_account-section__account-dropdown--lists-container--list--item">Wedding Registry</li>
              <li className="v_account-section__account-dropdown--lists-container--list--item">Baby Registry</li>
              <li className="v_account-section__account-dropdown--lists-container--list--item">Friends &amp; Family Gifting</li>
              <li className="v_account-section__account-dropdown--lists-container--list--item">AmazonSmile Charity Lists</li>
              <li className="v_account-section__account-dropdown--lists-container--list--item">Pantry Lists</li>
              <li className="v_account-section__account-dropdown--lists-container--list--item">Your Hearts</li>
              <li className="v_account-section__account-dropdown--lists-container--list--item">Explore Idea Lists</li>
              <li className="v_account-section__account-dropdown--lists-container--list--item">Explore Showroom</li>
              <li className="v_account-section__account-dropdown--lists-container--list--item">Scout | Style Explorer</li>
              <li className="v_account-section__account-dropdown--lists-container--list--item">Take the Home Style Quiz</li>
            </ul>
          </div>
          <div className="v_account-section__account-dropdown--lists-container--list">
            <p className="v_account-section__account-dropdown--lists-container--list--header">Your Account</p>
            <ul className="v_account-section__account-dropdown--lists-container--list--list">
              <li className="v_account-section__account-dropdown--lists-container--list--item">Your Account</li>
              <li className="v_account-section__account-dropdown--lists-container--list--item">Your Orders</li>
              <li className="v_account-section__account-dropdown--lists-container--list--item">Your Lists</li>
              <li className="v_account-section__account-dropdown--lists-container--list--item">Your Recommendations</li>
              <li className="v_account-section__account-dropdown--lists-container--list--item">Your Subscribe &amp; Save Items</li>
              <li className="v_account-section__account-dropdown--lists-container--list--item">Membership &amp; Subscriptions</li>
              <li className="v_account-section__account-dropdown--lists-container--list--item">Your Service Requests</li>
              <li className="v_account-section__account-dropdown--lists-container--list--item">Your Prime Membership</li>
              <li className="v_account-section__account-dropdown--lists-container--list--item">Your Garage</li>
              <li className="v_account-section__account-dropdown--lists-container--list--item">Your Fanshop</li>
              <li className="v_account-section__account-dropdown--lists-container--list--item">Your Pets</li>
              <li className="v_account-section__account-dropdown--lists-container--list--item">Start a Selling Account</li>
              <li className="v_account-section__account-dropdown--lists-container--list--item">Register for a Business Account</li>
              <li className="v_account-section__account-dropdown--lists-container--list--item">Your Amazon Credit Cards</li>
              <li className="v_account-section__account-dropdown--lists-container--list--item">Your Conent and Devices</li>
              <li className="v_account-section__account-dropdown--lists-container--list--item">Your Music Library</li>
              <li className="v_account-section__account-dropdown--lists-container--list--item">Your Amazon Photos</li>
              <li className="v_account-section__account-dropdown--lists-container--list--item">Your Amazon Drive</li>
              <li className="v_account-section__account-dropdown--lists-container--list--item">Your Prime Video</li>
              <li className="v_account-section__account-dropdown--lists-container--list--item">Your Kindle Unlimited</li>
              <li className="v_account-section__account-dropdown--lists-container--list--item">Your Watchlist</li>
              <li className="v_account-section__account-dropdown--lists-container--list--item">Your Video Library</li>
              <li className="v_account-section__account-dropdown--lists-container--list--item">Your Android Apps &amp; Devices</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDropdown;
