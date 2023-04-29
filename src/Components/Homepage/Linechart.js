import React from "react";
import './Linechart.css';
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Linechart = () => {
  const [week, setWeek] = useState([]);
  const [guest, setGuest] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const temp = await fetch("https://dashboard-backend-0pyv.onrender.com/linechart");
      const response = await temp.json();

      const temp_week = [];
      const temp_guest = [];
      const temp_user = [];
      response.map((item) => {
        temp_week.push(item.weeks);
        temp_guest.push(item.guest);
        temp_user.push(item.user);
      });
      setWeek(temp_week);
      setGuest(temp_guest);
      setUser(temp_user);
      console.log(week);
    };
    getData();
  },[]);

  const data = {
    labels: week,
    datasets: [
      {
        data: guest,
        backgroundColor: "transparent",
        borderColor: "#65ef2f",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.5,
      },
      {
        data: user,
        backgroundColor: "transparent",
        borderColor: "#cb0a40",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.5,
      }
    ],
  };

  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 500,
        ticks: {
          stepSize: 100,
          callback: (value) => value,
        },
        grid: {
          borderDash: [10],
        },
      },
    },
  };
  return (
    <div className="linechart-container">
      <div className="chartle-container">
        <div className="years">
          <h4>Activities</h4>
          <p>2022 - 2023</p>
        </div>
        <div className="audience">
          <p>Imports</p>
          <p>Exports</p>
        </div>
      </div>
      <Line data={data} options={options} width={900} height={200} className="chart"></Line>
    </div>
  );
};

export default Linechart;

