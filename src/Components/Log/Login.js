import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const handleLogin = async () => {
    let result = await fetch("http://localhost:2000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert("Please enter valid details");
    }
  };

  return (
    <div className="parent">
      <div className="signin">
        <h2>Sign In</h2>
        <h4 className="formh3">Sign in to your account</h4>
        <div className="sign-form">
          <label htmlFor="">Enter email</label>
          <br />
          <input
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <label htmlFor="">Enter password</label>
          <br />
          <input
            type="email"
            placeholder="Enter password"
            value={password}
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <button type="button" onClick={handleLogin}>
            log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
