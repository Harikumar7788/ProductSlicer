import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, setCurrentIndex } from '../redux/productsSlice';
import ProductItem from './ProductItem/ProductItem';
import Data from '../Data/Products.json';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  const currentIndex = useSelector(state => state.products.currentIndex);

  useEffect(() => {
    dispatch(setProducts(Data)); 
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % 3;
      dispatch(setCurrentIndex(nextIndex));
    }, 5000); 

    return () => clearInterval(interval); 
  }, [currentIndex, dispatch]);

  const displayItems = products.slice(currentIndex * 8, (currentIndex + 1) * 8);

  return (
    <div style={{display:'flex', flexDirection:'row', justifyContent:'center', flexWrap:'wrap'}}>
      {displayItems.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
