import React from 'react';
import '@styles/Menu.scss';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="Menu">
      <ul>
        <li>
          <Link to="/orders">My orders</Link>
          <a href="/orders" className="title">My orders</a>
        </li>
        <li>
          <Link to="/account">My account</Link>
          <a href="/account">My account</a>
        </li>
        <li>
          <Link to="/login">Sign out</Link>
          <a href="/login">Sign out</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;