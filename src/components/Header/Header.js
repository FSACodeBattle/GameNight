'use strict';
import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">Home</Link>
      </div>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li><Link to="battlePage"><a href="#" />Battle Page</Link></li>
          <li><Link to="code_editor"><a href="#" />Code Editor</Link></li>
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
            <ul className="dropdown-menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" className="divider"></li>
              <li><a href="#">Separated link</a></li>
              <li role="separator" className="divider"></li>
              <li><a href="#">One more separated link</a></li>
            </ul>
          </li>
        </ul>
        <form className="navbar-form navbar-left search" id="login">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search" />
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    </div>
  </nav>
)

export default Header
  // <div>
  //   <h1>1v1 Code</h1>
  //   <div className='container text-right'>
  //   <IndexLink to='/' activeClassName='route--active' style={{textAlign: 'left'}}>
  //     Home
  //   </IndexLink>
  //   {' · '}
  //   <Link to='/code_editor' activeClassName='route--active'>
  //     Code Editor
  //   </Link>
  //   {' · '}
  //   <Link to='/counter' activeClassName='route--active'>
  //     Counter
  //   </Link>
  //   {' · '}
  //   <Link to='/battlePage' activeClassName='route--active'>
  //     Battle Page
  //   </Link>
  //   </div>

  // </div>
