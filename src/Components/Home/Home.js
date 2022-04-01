import React from 'react';
import useProducts from '../../Utilities/Hooks/useProducts';
import Product from './Product/Product';


const Home = () => {

  const [products, setProducts] = useProducts();
  return (
    <div>
      {
        products.map(product => <Product key={product._id} product={product}></Product>)
      }
    </div>
  );
};

export default Home;