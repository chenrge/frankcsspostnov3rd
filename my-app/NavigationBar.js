import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css'
import './navigationbar.css'

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.loggedIn = localStorage.getItem('loggedin') === 'true';
    this.user = localStorage.getItem('id');
  }



  render() {
    const id = this.user;
    if (this.loggedIn) {
      return (
        <div id="navigationbarcss">
          <nav>

            <NavLink to="/Home" exact activeClassName="current">
              <button><i className="fa fa-home"></i> Home </button>
            </NavLink>
            <NavLink to={"/Profile?user=" + id} exact activeClassName="current">
              <button><i className="fa fa-address-book"></i> My Profile</button>
            </NavLink>

            <NavLink to="/create" exact activeClassName="current">
              <button><i className="fa fa-plus"></i>Add Fandom</button>
            </NavLink>

            <NavLink to="/Logout">
              <button><i className="fa fa-power-off"></i> Logout</button>
            </NavLink>







          </nav>

        </div>
      );
    } else {
      return (
        <div>
          <nav>

            <div >
              Navigation Bar
              <ul>
                <li><NavLink to="/" exact activeClassName="current">Login</NavLink></li>
                <li><NavLink to="/Signup" exact activeClassName="current">Sign Up</NavLink></li>

              </ul>
            </div>
          </nav>

        </div>
      );

    }
  }
}

export default NavigationBar;
