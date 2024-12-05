import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/productsSlice';
import { useNavigate } from 'react-router';
import "./Modal.css"

const Modal = () => {
  const dispatch = useDispatch();
  const { modalData, modalVisible } = useSelector((state) => state.products);
  const navigate = useNavigate();

 
  const handleCloseModal = () => {
    dispatch(closeModal());
    navigate("/");  
  }

  if (!modalVisible || !modalData) return <div> Nothing to Show !!!!!!.........</div>;  

  return (
    <div className="modal">
      <h1> Detailed Section </h1>
      <div className="modal-content">
        <h2>{modalData.name}</h2>
        <img src={modalData.image} alt={modalData.name} style={{ width: '100%', maxWidth: '400px' }} />
        <p>{modalData.description}</p>
        <p><strong>Old Price: ₹{modalData.old_price}</strong></p>
        <p><strong>New Price: ₹{modalData.new_price}</strong></p>
        <p><strong>Rating: {modalData.rating}</strong></p>
        <a href={modalData.url} target="_blank" rel="noopener noreferrer">View Product</a>
      </div>
    </div>
  );
};

export default Modal;
