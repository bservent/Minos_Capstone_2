import React from 'react';
import PropTypes from 'prop-types';
import Login from './Login'
import Signup from './Signup'

function NavigationBar(props) {
  const logged_out_nav = (
    <ul>
      <li onClick={() => props.setDisplayForm(<Login handleLogin={props.handleLogin}></Login>)}>login</li>
      <li onClick={() => props.setDisplayForm(<Signup handleSignup={props.handleSignup}></Signup>)}>signup</li>
    </ul>
  );

  const logged_in_nav = (
    <ul>
      <li onClick={props.handle_logout}>logout</li>
    </ul>
  );
  return <div>{props.loggedIn ? logged_in_nav : logged_out_nav}</div>;
}

export default NavigationBar;

NavigationBar.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  setDisplayForm: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired
};