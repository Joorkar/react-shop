import React, { useState } from 'react';
import '@styles/ProductItem.scss';

import addCart from '@icons/bt_add_to_cart.svg';
import addedCart from '@icons/bt_added_to_cart.svg';

const ProductItem = ({ product }) => {
  const [cart, setCart] = useState(false);

  const handleClick = () => {
    setCart(!cart);
  };

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price},00</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={handleClick} >
          <img src={!cart ? addCart : addedCart} alt="button add cart" />
        </figure>
        {cart}
      </div>
    </div>
  );
}

export default ProductItem;