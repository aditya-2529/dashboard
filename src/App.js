import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { Report } from './components/Report';
import { Sites } from './components/Sites';
import { Billing } from './components/Billing';
import { Payment } from './components/Payment';
import { NewPassword } from './components/NewPassword';

function App() {
  return (
    <>
  <Routes>
    <Route path='/' element={<Dashboard/>}/>
    <Route path='/report' element={<Report/>}/>
    <Route path='/sites' element={<Sites/>}/>
    <Route path='/billing' element={<Billing/>}/>
    <Route path='/payment' element={<Payment/>}/>
    <Route path='/password' element={<NewPassword/>}/>
  </Routes>
  </>
    
  );
}

export default App;
