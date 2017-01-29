
import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div>
    <h1>1v1 Code</h1>
    <div className='container text-right'>
    <IndexLink to='/' activeClassName='route--active' style={{textAlign: 'left'}}>
      Home
    </IndexLink>
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

  </div>
)

export default Header

// return (
//     <header>
//       <h1 className="logo">Build-A-Box</h1>

//       <div className="menu">
//         <span style={{marginRight: 7}}>{user.toUpperCase()}</span>
//         <Link to='/cart'>
//           <span>MY CART</span>
//         </Link> 
//         <Link to="/login">
//           <span>LOGIN</span>
//         </Link>
//         <Link to="/whoami">
//           <span>LOGOUT</span>
//          </Link>
//         <Link to="/signup">
//           <span>SIGN UP</span>
//         </Link> 
//       </div>
//       <div className="clear"></div>
//     </header>
//   );