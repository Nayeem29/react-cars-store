import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav>
        <Link to='/'></Link>
        <Link to='/home'>Home</Link>
        <Link to='/cars'>Cars</Link>
        <Link to='/order'>Orders</Link>
        <Link to='/cart'>Cart</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
    </div>
  );
};

export default Header;