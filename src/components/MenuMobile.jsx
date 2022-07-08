import React, { useState } from 'react';
import '@styles/MenuMobile.scss'
import iconClose from '@icons/icon_close.png'

const MenuMobile = ({ toggleMenu }) => {
  const handleClose = () => toggleMenu(false);

  return (
    <section class="mobile-menu">
      <img src={iconClose} alt="icon close" onClick={handleClose} />
      <ul class="first-ul">
        <li>
          <a href="/">CATEGORIES</a>
        </li>
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

      <ul class="second-ul">
        <li>
          <a href="/">My orders</a>
        </li>
        <li>
          <a href="/">My account</a>
        </li>
      </ul>

      <ul class="last-ul">
        <li>
          <a href="/" class="email">ejemplo@example.com</a>
        </li>
        <li>
          <a href="/" class="sign-out">Sign out</a>
        </li>
      </ul>
    </section>
  );
};

export default MenuMobile;