import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '@context/AppContext';
import addCart from '@icons/bt_add_to_cart.svg';
import addedCart from '@icons/bt_added_to_cart.svg';

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleClick = item => {
    addToCart(item);
    console.log(item);
  };

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}.00</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)} >
          <img src={addCart} alt="button add cart" />
        </figure>
      </div>
    </div>
  );
}

export default ProductItem;