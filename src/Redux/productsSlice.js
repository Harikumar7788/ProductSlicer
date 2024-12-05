import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  products: [],
  currentIndex: 0,
  modalData: null,
  modalVisible: false, 
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
 
    setProducts: (state, action) => {
      state.products = action.payload;
    },
   
    setModalData: (state, action) => {
      state.modalData = action.payload; 
      state.modalVisible = true;
    },

    closeModal: (state) => {
      state.modalVisible = false; 
      state.modalData = null; 
    },
  
    setCurrentIndex: (state, action) => {
      state.currentIndex = action.payload;
    },
  },
});

export const { setProducts, setModalData, closeModal, setCurrentIndex } = productsSlice.actions;
export default productsSlice.reducer;
