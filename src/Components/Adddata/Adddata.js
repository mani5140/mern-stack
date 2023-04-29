import React from "react";
import { useState } from "react";
import "./Adddata.css";
import Footer from "../Footer/Footer";

const AddData = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [quantity, setQuantity] = useState(0);

  const handleData = async () => {
    if (!name || !price || !category || !company || !quantity) {
      alert("Enter all details");
    } else {
      console.log(name, price, category, company, quantity);
      const userId = JSON.parse(localStorage.getItem("user"))._id;
      let result = await fetch("http://localhost:2000/addproduct", {
        method: "post",
        body: JSON.stringify({
          name,
          price,
          category,
          userId,
          company,
          quantity,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      alert("Added Successfully...");
      console.log(result);
    }
  };
  return (
    <div className="add-container">
      <div className="add">
        <h2>Add New Product</h2>
        <div className="add-fields">
          <label>Enter product name</label>
          <input
            type="text"
            placeholder="Enter product name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="add-fields">
          <label>Enter price</label>
          <input
            type="text"
            placeholder="Enter price"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div className="add-fields">
          <label>Enter category</label>
          <input
            type="text"
            placeholder="Enter category"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
        </div>
        <div className="add-fields">
          <label>Enter company</label>
          <input
            type="text"
            placeholder="Enter company"
            onChange={(e) => {
              setCompany(e.target.value);
            }}
          />
        </div>
        <div className="add-fields">
          {" "}
          <label>Enter quantity</label>
          <input
            type="number"
            placeholder="Enter quantity"
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
        </div>

        <button onClick={handleData}>Add Product</button>
      </div>
    </div>
  );
};

export default AddData;
