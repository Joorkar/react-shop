import React from 'react';
import '@styles/Menu.scss';

const Menu = () => {
  return (
    <div className="Menu">
      <ul>
        <li>
          <a href="@pages/Orders" className="title">My orders</a>
        </li>
        <li>
          <a href="@pages/MyAccount">My account</a>
        </li>
        <li>
          <a href="@pages/Login">Sign out</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;