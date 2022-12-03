import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/sb-admin-2.css';
import './css/fontawesome-free/css/all.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Availablerooms from './Availablerooms';
import Booking from './Booking';
import Bookedrooms from './Bookedrooms';
import CustomerDetails from './Customerdetails';
import Createrooms from './Createrooms';


function App() {
  return (
    <BrowserRouter>
    <div id="wrapper">
        <Sidebar/>
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Routes>
              <Route path='/availablerooms' element={<Availablerooms/>}></Route>
              <Route path='/booking/:roomId' element={<Booking/>}></Route>
              <Route path="/bookedrooms" element={<Bookedrooms/>}></Route>
              <Route path='/customerDetails' element={<CustomerDetails/>}></Route>
              <Route path="/createrooms" element={<Createrooms/>}></Route>
            </Routes>
          </div>
        </div>
      </div>
  </BrowserRouter>
  );
}

export default App;
