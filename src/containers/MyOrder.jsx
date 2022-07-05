import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext'
import '@styles/MyOrder.scss';
import flechita from '@icons/flechita.svg';

const MyOrder = ({ setToggle }) => {
  const { state } = useContext(AppContext)

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  }

  const handleClose = () => setToggle(false);

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={flechita} alt="arrow" onClick={handleClose} />
        <p className="title">My order</p>
      </div>
      <div className="card-container">
        {
          state.cart.map(product => <OrderItem
            product={product}
            key={`orderItem-${product.id}`} />
          )
        }
      </div>
      <div className="my-order-content">
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <button className="primary-button">
          Checkout
        </button>
      </div>
    </aside>
  );
}

export default MyOrder;