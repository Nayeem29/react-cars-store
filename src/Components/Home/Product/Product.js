import React from 'react';

const Product = ({ product }) => {
  const { name, picture, price } = product;
  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
};

export default Product;