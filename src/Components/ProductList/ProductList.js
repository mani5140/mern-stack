import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Productlist.css'

const ProductList = () => {
    const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    let data = await fetch("http://localhost:2000/products");
    data = await data.json();
    setProducts(data);
  };
  console.log(products);

  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:2000/products/${id}`,{method:"Delete"});
    result = await result.json();
    if(result){
        getProducts();
    }
  }

  const searchHandle = async (event) => {
    let key = event.target.value;
    if(key){
      let result = await fetch(`http://localhost:2000/search/${key}`);
    result = await result.json();
    if(result){
      setProducts(result);
    }
    }
    else{
      getProducts();
    }
    

  }

  return (
    <div className="product-container">
      <div className="product">
        <h2>List of products</h2>
        <input type="text" placeholder="search products..." onChange={searchHandle}/>
      <table>
        <thead>
          <tr>
            <td>s no.</td>
            <td>Name</td>
            <td>Price</td>
            <td>Category</td>
            <td>Company</td>
            <td>Quantity</td>
            <td>Operations</td>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td>{item.company}</td>
              <td>{item.quantity}</td>
              <td><button className="product-oper" onClick={() => deleteProduct(item._id)}>Delete</button>
              <button className="product-oper"onClick={() => navigate(`/updateData/${item._id}`)}>Update</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default ProductList;
