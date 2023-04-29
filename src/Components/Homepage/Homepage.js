import React from "react";
import "./Homepage.css";
import Linechart from "./Linechart";
import Piechart from "./Piechart";
import Footer from "../Footer/Footer";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';

const Homepage = () => {
  return (
    <div>
    <div className="home">
      <div className="home-left">
        <h2>menu</h2>
        <h4><DashboardIcon /> Dashboard</h4>
        <h4><ReceiptLongIcon/> Transactions</h4>
        <h4><HistoryIcon/> History</h4>
        <h4><SettingsIcon/> Settings</h4>
        <div className="menu-bottom">
          <h6>Help</h6>
          <h6>Contact Us</h6>
        </div>
      </div>

      <div className="home-right">
        <Linechart />
        <Piechart />
      </div>
      
    </div>
    <Footer/>
    </div>
  );
};

export default Homepage;
