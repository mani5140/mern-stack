import React from "react";
import { useState, useEffect } from "react";
import "./Piechart.css";
import Chart from "react-apexcharts";

const Piechart = () => {
  const [product, setProduct] = useState([]);
  const [unit, setUnit] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const temp = await fetch(
        "https://dashboard-backend-0pyv.onrender.com/piechart"
      );
      const response = await temp.json();

      const temp_product = [];
      const temp_unit = [];
      response.map((item) => {
        temp_product.push(item.product);
        temp_unit.push(item.units);
      });
      setProduct(temp_product);
      setUnit(temp_unit);
    };
    getData();
  }, []);

  return (
    <div className="main-pie">
      <div className="piechart">
        <div className="piechart-container">
          <h3>Top products</h3>
          <p>Mar-June</p>
        </div>
        <Chart
          type="pie"
          width={300}
          height={300}
          series={unit}
          options={{
            labels: product,
            dataLabels: {
              enabled: false,
            },
          }}
        ></Chart>
      </div>
      <div className="news">
        <div className="today-schedule">
            <h3>Today's schedule</h3>
            <p>See All</p>
        </div>
        <div className="news-container">
            <div className="demo1"></div>
            <div className="venue">
                <h5>Check operation at Giga Factory 1</h5>
                <p>18:00-19:00</p>
                <p>at Central Jakarta</p>
            </div>
        </div>
        <div className="news-container">
            <div className="demo2"></div>
            <div className="venue">
                <h5>Meeting with the wholesalers of india</h5>
                <p>11:00-01:00</p>
                <p>at lpu, phagwara</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Piechart;
