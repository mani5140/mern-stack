import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../Adddata/Adddata.css";

const UpdateData = () => {
    const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [quantity, setQuantity] = useState(0);
  const params = useParams();

  useEffect(() => {
    getDetails();
  },[]);

  const getDetails = async() =>{
    console.log(params);
    let result = await fetch(`http://localhost:2000/products/${params.id}`);
    result = await result.json();
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
    setQuantity(result.quantity);
  }
  const handleData = async() => {
      console.log(name, price, category, company, quantity);
      let result = await fetch(`http://localhost:2000/products/${params.id}`, {
        method: "Put",
        body: JSON.stringify({
          name,
          price,
          category,
          company,
          quantity,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      alert("Details are updated");
      navigate("/products");
      
  };
  return (
    // <div>
    //   <div>
    //     <h1>Add New Product</h1>
    //     <input
    //       type="text"
    //       placeholder="Enter product name"
    //       value={name}
    //       onChange={(e) => {
    //         setName(e.target.value);
    //       }}
    //     />
    //     <br />
    //     <input
    //       type="text"
    //       placeholder="Enter price"
    //       value={price}
    //       onChange={(e) => {
    //         setPrice(e.target.value);
    //       }}
    //     />
    //     <br />
    //     <input
    //       type="text"
    //       placeholder="Enter category"
    //       value={category}
    //       onChange={(e) => {
    //         setCategory(e.target.value);
    //       }}
    //     />
    //     <br />
    //     <input
    //       type="text"
    //       placeholder="Enter company"
    //       value={company}
    //       onChange={(e) => {
    //         setCompany(e.target.value);
    //       }}
    //     />
    //     <br />
    //     <input
    //       type="number"
    //       placeholder="Enter quantity"
    //       value={quantity}
    //       onChange={(e) => {
    //         setQuantity(e.target.value);
    //       }}
    //     />
    //     <br />
    //     <button onClick={handleData}>Update Product</button>
    //   </div>
    // </div>
    <div className="add-container">
    <div className="add">
      <h2>Update Product details</h2>
      <div className="add-fields">
        <label>Enter product name</label>
        <input
          type="text"
          placeholder="Enter product name"
          value={name}
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
          value={price}
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
          value={category}
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
          value={company}
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
          value={quantity}
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
        />
      </div>

      <button onClick={handleData}>Update Product</button>
    </div>
  </div>
  );
};

export default UpdateData;
