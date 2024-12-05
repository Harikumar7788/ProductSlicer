import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import './App.css';
import ProductList from './Components/ProductList';
import ProductItem from './Components/ProductItem/ProductItem';
import Modal from './Components/Modal/Modal';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/eachitem" element={<ProductItem />} />
        <Route path="/modal" element={<Modal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
