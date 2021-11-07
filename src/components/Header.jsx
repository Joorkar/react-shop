import React, { useState, useContext } from 'react';
import '@styles/Header.scss'
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder'
import menuImg from '@icons/icon_menu.svg'
import logo from '@logos/logo_yard_sale.svg'
import AppContext from '@context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg'

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrdes] = useState(false)
  const { state } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  const verifyCart = (cartNumber) => {
    if (cartNumber && (cartNumber <= 9)) {
      return (
        <div>{cartNumber}</div>
      );
    } else if (cartNumber > 9) {
      return (
        <div>+9</div>
      )
    } else {
      return null;
    }
  }

  return (
    <nav>
      <img src={menuImg} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            platzi@example.com
          </li>
          <li
            className="navbar-shopping-cart"
            onClick={() => setToggleOrdes(!toggleOrders)}
          >
            <img src={shoppingCart} alt="shopping cart" />
            {verifyCart(state.cart.length)}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  );
};

export default Header;
