import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";

import Login from './Home/login';

import Header from './Header/header';
import Footer from './Footer/footer';

import ViewInventory from './Inventory/view';
import UpdateInventory from './Inventory/update';
import AddInventory from './Inventory/add';
import ViewAllInventory from './Inventory/viewall';

import ViewALLRoom from './Room/viewall';
import ViewRoom from './Room/view';
import UpdateRoom from './Room/update';
import AddRoom from './Room/add';

import MainGuest from './Guest/main';
import ViewAllGuest from './Guest/viewall';
import ViewGuest from './Guest/view';
import UpdateGuest from './Guest/update';
import AddGuest from './Guest/add';

import MainReservation from './Reservation/main';
import ViewAllReservation from './Reservation/viewall';
import ViewReservation from './Reservation/view';
import UpdateReservation from './Reservation/update';
import AddReservation from './Reservation/add';

import MainEmployee from './Employee/main';
import ViewAllEmployee from './Employee/viewall';
import ViewEmployee from './Employee/view';
import UpdateEmployee from './Employee/update';
import AddEmployee from './Employee/add';

import Owner from './Home/owner';
import Receptionist from './Home/receptionist';
import Manager from './Home/manager';
import Home from './Home/home';
import About from './Home/about';
import Contact from './Home/contact';
import Register from './Home/register';
import Payment from './Reservation/payment';


function App() {
  return (
    <div>
      <Header></Header>
      <BrowserRouter>
        <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/contact" element={<Contact />}/>

        <Route path="owner" element={<Owner />}/>
        <Route path="receptionist" element={<Receptionist />}/>
        <Route path="manager" element={<Manager />}/>
        
        <Route path="/inventory/viewall" element={<ViewAllInventory />}/>
        <Route path="/inventory/view/:inventoryId" element={<ViewInventory />}/>
        <Route path="/inventory/update/:inventoryId" element={<UpdateInventory />}/>
        <Route path="/inventory/add" element={<AddInventory />}/>

        <Route path="/room/viewall" element={<ViewALLRoom/>}/>
        <Route path="/room/view/:roomId" element={<ViewRoom/>}/>
        <Route path="/room/update/:roomId" element={<UpdateRoom/>}/>
        <Route path="/room/add" element={<AddRoom />}/>

        <Route path="/guest" element={<MainGuest/>}/>
        <Route path="/guest/viewall" element={<ViewAllGuest/>}/>
        <Route path="/guest/view/:guestId" element={<ViewGuest/>}/>
        <Route path="/guest/update/:guestId" element={<UpdateGuest/>}/>
        <Route path="/guest/add" element={<AddGuest />}/>

        <Route path="/reservation" element={<MainReservation/>}/>
        <Route path="/reservation/viewall" element={<ViewAllReservation/>}/>
        <Route path="/reservation/view/:reservationId" element={<ViewReservation/>}/>
        <Route path="/reservation/update/:reservationId" element={<UpdateReservation/>}/>
        <Route path="/reservation/add" element={<AddReservation />}/>

        <Route path="/user/employee" element={<MainEmployee/>}/>
        <Route path="/user/employee/viewall" element={<ViewAllEmployee/>}/>
        <Route path="/user/employee/view/:employeeId" element={<ViewEmployee/>}/>
        <Route path="/user/employee/update/:employeeId" element={<UpdateEmployee/>}/>
        <Route path="/user/employee/add" element={<AddEmployee />}/>

        <Route path="/reservation/payment" element={<Payment />}/>

        </Routes>
      </BrowserRouter>
    <Footer></Footer>
    </div>
  );
}

export default App;
