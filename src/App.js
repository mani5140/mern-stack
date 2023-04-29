import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.js";
import Homepage from "./Components/Homepage/Homepage.js";
import AddData from "./Components/Adddata/Adddata.js";
import UpdateData from "./Components/UpdateData/UpdateData.js";
import ProductList from "./Components/ProductList/ProductList.js";
import Logout from "./Components/Log/Logout.js";
import Footer from "./Components/Footer/Footer.js";
import Register from "./Components/Registerpage/Register";
import Login from "./Components/Log/Login";
import PrivateComponent from "./Components/privateComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<PrivateComponent />}>
        <Route exact path = '/' element={<Homepage />}></Route>
        <Route exact path = '/addData' element={<AddData />}></Route>
        <Route exact path = '/updateData/:id' element={<UpdateData />}></Route>
        <Route exact path = '/products' element={<ProductList />}></Route>
        <Route exact path = '/logout' element={<Logout />}></Route>
        </Route>
        <Route exact path = '/register' element={<Register />}></Route>
        <Route exact path = '/login' element={<Login />}></Route>
      </Routes>
      {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

{
  /* <Navbar />
      <Routes>
        <Route element={<PrivateComponent />}>
        <Route exact path = '/' element={<Homepage />}></Route>
        <Route exact path = '/addData' element={<AddData />}></Route>
        <Route exact path = '/updateData/:id' element={<UpdateData />}></Route>
        <Route exact path = '/products' element={<ProductList />}></Route>
        <Route exact path = '/logout' element={<Logout />}></Route>
        </Route>
        <Route exact path = '/register' element={<Register />}></Route>
        <Route exact path = '/login' element={<Login />}></Route>
      </Routes>
      <Footer /> */
}
