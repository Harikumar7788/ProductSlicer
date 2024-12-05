import React from 'react';
import { useDispatch } from 'react-redux';
import { setModalData } from '../../redux/productsSlice';
import { useNavigate } from 'react-router-dom';
import './ProductItem.css'; // Make sure this CSS file is linked

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    if (product) {
      dispatch(setModalData(product));
      console.log("Product Clicked !!!!!!........");
      navigate("/modal");
    }
  };

  if (!product) {
    return <div className="loading-text">Loading...</div>;
  }

  return (
    <div className="product-item" onClick={handleClick}>
      <img 
        src={product?.image || 'default-image.jpg'} 
        alt={product?.name || 'Default Product'} 
        className="product-image" 
      />
      <h3 className="product-name">{product?.name || 'Default Name'}</h3>
    </div>
  );
};

export default ProductItem;
