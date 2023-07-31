import React, { useState } from "react";
// import { useHistory } from 'react-router';

function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // const history = useHistory();

  async function SignUp() {
    let item = { name, email, password };
    let result = await fetch("http://127.0.0.1:8000/api/register", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    console.log("Result", result);
    localStorage.setItem("user-info", JSON.stringify(result));
    // history.push("/add");
  }

  return (
    <div className="col-sm-6 offset-sm-3">
      <h1>User Sign Up </h1>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control m-3"
      />
      <input
        type="email"
        placeholder="Enter Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-control m-3"
      />
      <input
        type="password"
        placeholder="Enter Your Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="form-control m-3"
      />
      <button onClick={SignUp} className="btn btn-primary">
        Sign Up
      </button>
    </div>
  );
}
export default Register;