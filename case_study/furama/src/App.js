import logo from './logo.svg';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CustomerCreate from './components/customer/CustomerCreate';
import CustomerList from './components/customer/CustomerList';
import CustomerUpdate from './components/customer/CustomerUpdate';
import FacilityList from './components/facility/FacilityList';
import FacilityCreate from './components/facility/FacilityCreate';
import FacilityUpdate from './components/facility/FacilityUpdate';
import ContractList from './components/contract/ContractList';
import ContractCreate from './components/contract/ContractCreate';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import FacilityCard from './components/facility/FacilityCard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <Header />
    
        <Routes>
          <Route path='/' element={<FacilityCard />}/>
          <Route path='/customer/'>
              <Route path='create' element={<CustomerCreate />} />
              <Route path='list' element={<CustomerList />} />
              <Route path='update/:id' element={<CustomerUpdate />} />
          </Route>
          <Route path='/contract/'>
              <Route path='list' element={<ContractList />} />
              <Route path='create/:id' element={<ContractCreate />} />
          </Route>
          
          <Route path='/facility/'>
              <Route path='update/:id' element={<FacilityUpdate />} />
              <Route path='create' element={<FacilityCreate />} />
              <Route path='list' element={<FacilityList />} />
          </Route>
        </Routes>
        <ToastContainer/>
      <Footer />
    </>
  );
}

export default App;
