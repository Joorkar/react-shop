import React, { useState, useContext } from 'react';
import '@styles/Header.scss'
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder'
import MenuMobile from '@components/MenuMobile';
import menuImg from '@icons/icon_menu.svg'
import logo from '@logos/logo_yard_sale.svg'
import AppContext from '@context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg'

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false)
  const [toggleMenu, setToggleMenu] = useState(false)
  const { state } = useContext(AppContext);

  const handleToggle = () => {
    setToggle((prev) => !prev);
    // setToggle(!toggle); Con esta manera no me asugura tomar el estado actual
  }

  const handleMenuToggle = () => {
    setToggleMenu((prev) => !prev);
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
      <img src={menuImg} alt="menu" className="menu" onClick={handleMenuToggle} />
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
            onClick={() => setToggleOrders(!toggleOrders)}
          >
            <img src={shoppingCart} alt="shopping cart" />
            {verifyCart(state.cart.length)}
          </li>
        </ul>
      </div>
      {toggleMenu && <MenuMobile toggleMenu={setToggleMenu} />}
      {toggle && <Menu />}
      {toggleOrders && <MyOrder toggleOrders={setToggleOrders} />}
    </nav>
  );
};

export default Header;
