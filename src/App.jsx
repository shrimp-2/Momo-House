import React from "react";
import Menu from "./Pages/Menu";
import Service from "./Pages/Service";
import AllergyAdvice from "./Pages/AllergyAdvice";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Navbar/Navigation";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import ProductDescription from "./Pages/ProductDescription";
import CartPage from "./Pages/CartPage";
import Payment from "./Payment/Payment";
import Success from "./Payment/Success";
import Failure from "./Payment/Failure";
import Login from "./auth/Login";
import Profile from "./auth/Profile";
import ProtectedRoutes from "./auth/ProtectedRoutes";
function App() {
  return (
    <div className="">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<ProtectedRoutes  components={<Menu/>} />} />
        <Route path="/services" element={<Service />} />
        <Route path="/allergyadvice" element={<AllergyAdvice />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="/payment" element={<ProtectedRoutes  components={<Payment/>} />} />
        <Route path="/success" element={<Success/>} />
        <Route path="/failure" element={<Failure/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />

        <Route path='/productdescription/:id' element={<ProtectedRoutes  components={<ProductDescription/>} />}/>
      </Routes>
     <Footer/>
    </div>
  );
}
export default App;
