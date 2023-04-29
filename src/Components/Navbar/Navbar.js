import React from "react";
import "./Navbar.css";
import logo from "../../Components/OpenCart.png";
import { useNavigate } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import StorageIcon from '@mui/icons-material/Storage';
import UpgradeIcon from '@mui/icons-material/Upgrade';


const Navbar = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="nav">
      
      <img src={logo} alt="logo" className="logo" />

      {auth ? (
        <div className="nav-title">
          <div className="nav-user">
            <div>

              <h2>Dashboard</h2>
            </div>
            <div className="nav-head">
              <input type="text" placeholder="search..."/>
              <NotificationAddIcon/>
              <p onClick={logout}><PersonIcon/>{JSON.parse(auth).name}(log out)</p>
            </div>
          </div>
          <div className="nav-head2">
            <div className="nav-head3"><p onClick={() => navigate("/")}><HomeIcon/> Home</p></div>
            <div className="nav-head3"><p onClick={() => navigate("/addData")}><AddIcon/> Add</p></div>
            <div className="nav-head3"><p onClick={() => navigate("/products")}><StorageIcon/> Products</p></div>
            <div className="nav-head3"><p onClick={() => navigate("/updateData")}><UpgradeIcon/> Update</p></div>
            
          </div>
        </div>
      ) : (
        <div className="nav-login">
          <div className="nav-reg">
            <p onClick={() => navigate("/register")}>register</p>
          </div>
          <div className="nav-reg">
            <p onClick={() => navigate("/login")}>login</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
