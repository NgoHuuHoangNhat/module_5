import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ListProduct from './components/ListProduct';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import UpdateProduct from './components/UpdateProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateProduct from './components/CreateProduct';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<ListProduct />}></Route>
        <Route path='/update/:id' element={<UpdateProduct />}></Route>
        <Route path='/create' element={<CreateProduct/>}/>
      </Routes>
      <ToastContainer/>
    </>
  );
}

export default App;
