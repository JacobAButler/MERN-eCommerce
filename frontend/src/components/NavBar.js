import React from 'react';
import {Link} from 'react-router-dom';
import '../CSS/navBar.css'

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <Link className="navbar-brand" to="/">
        Shop
      </Link>

      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </nav>
  );
}

export default NavBar;

