import { useState } from "react";

const initialState = {
  cart: [],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const verifyIdDoesNotExist = (id) => {
    const idExist = state.cart.some(item => item.id === id);
    if (idExist) {
      return verifyIdDoesNotExist(id + 1);
    } else {
      return id;
    }
  };

  const addToCart = (payload) => {
    const newId = verifyIdDoesNotExist(payload.id);
    const payloadWithNewId = { ...payload, id: newId };

    setState({
      ...state,
      cart: [...state.cart, payloadWithNewId],
    });
  }

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((item) => item.id === payload.id),
    });
  }

  return {
    state,
    addToCart,
    removeFromCart,
  }
};

export default useInitialState;