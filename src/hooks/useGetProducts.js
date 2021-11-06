import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const response = await axios(API);
    setProducts(response.data)
  }, []);

  // Sin usar @babel/plugin-transform-runtime
  // useEffect(() => {
  //   const useAsyncEffect = async () => {
  //     const response = await axios(API);
  //     setProducts(response.data)
  //   }
  //   useAsyncEffect()
  // }, []);

  return products;
}

export default useGetProducts;