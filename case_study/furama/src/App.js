import logo from './logo.svg';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CustomerCreate from './components/customer/customer-create';
import CustomerList from './components/customer/customer-list';
import CustomerUpdate from './components/customer/customer-update';
import FacilityList from './components/facility/facility-list';
import FacilityCreate from './components/facility/facility-create';
import FacilityUpdate from './components/facility/facility-update';

function App() {
  return (
    <>
      <Header />
      <FacilityList />
      <Footer />
    </>
  );
}

export default App;
