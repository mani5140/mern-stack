import React from "react";
import { useState, useEffect } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const sendData = async () => {
    let result = await fetch("http://localhost:2000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    localStorage.setItem("user", JSON.stringify(result));
    if (result) {
      navigate("/");
    }
  };

  return (
    // <div className="register">
    //   <div className="register_center">
    //     <h2>Register Form</h2>
    //     <label htmlFor="name">
    //       Enter Name : <input type="text" placeholder="mani" value={name} onChange={(e) => {setName(e.target.value)}}/>
    //     </label>
    //     <br />
    //     <label htmlFor="email">
    //       Enter Email : <input type="email" placeholder="abc@gmail.com" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
    //     </label>
    //     <br />
    //     <label htmlFor="password">
    //       Enter Password : <input type="password" placeholder="#@3901" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
    //     </label>
    //     <button onClick={sendData}>click me</button>
    //   </div>
    // </div>
    <div className="register">
      <div className="register-container">
        <h2>Register Now</h2>
        <h4>Register your account</h4>
        <div className="register-form">
          <label htmlFor="">Enter name</label><br />
          <input
            type="text"
            placeholder="mani"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <label htmlFor="">Enter email</label>
          <br />
          <input
            type="email"
            placeholder="abc@gmail.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <label htmlFor="">Enter password</label>
          <br />
          <input
            type="password"
            placeholder="#@3901"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <button onClick={sendData}>click me</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
