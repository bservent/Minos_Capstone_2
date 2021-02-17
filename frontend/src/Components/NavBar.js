import React from 'react';
import PropTypes from 'prop-types';

function NavigationBar(props) {
  console.log(props)
  const logged_out_nav = (
    <ul>
      <li onClick={() => props.handleDisplayForm('login')}>login</li>
      <li onClick={() => props.handleDisplayForm('signup')}>signup</li>
    </ul>
  );

  const logged_in_nav = (
    <ul>
      <li onClick={props.handle_logout}>logout</li>
    </ul>
  );
  return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
}

export default NavigationBar;

NavigationBar.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  handleDisplayForm: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired
};