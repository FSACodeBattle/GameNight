'use strict';
import React from 'react'
import {  Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div>
    <Link to="/">
      Home
    </Link>
      {' · '}
    <Link to='/code_editor' activeClassName='route--active'>
      Code Editor
    </Link>
      {' · '}
    <Link to='/counter' activeClassName='route--active'>
      Counter
    </Link>
    {' · '}
    <Link to='/battlePage' activeClassName='route--active'>
      Battle Page
    </Link>
  </div>
)

export default Header

