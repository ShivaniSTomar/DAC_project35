import React from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    var errors = validate(); 
    if(errors.email){
      document.getElementById("emailErr").innerHTML=errors.email;
    }
    else{
      document.getElementById("emailErr").innerHTML= "";
    }
    if(errors.password){
      document.getElementById("passErr").innerHTML=errors.password;
    }
    else{
      document.getElementById("passErr").innerHTML= "";
    }
  };

  const resetForm = (event) => {
    setEmail('');
    setPassword('');
  };

  const validate = () => {
    const errors = {}
    if (!email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = 'Invalid email address'
    }
    if(!password){
      errors.password = 'Required'
    } else if (password.trim().length <= 0) {
      errors.password = 'Invalid password'
    }
    return errors
  }

  return (
    <form onSubmit={handleSubmit} action="/freelancerHome" method="post">
      <div>
        <label htmlFor="email">Email </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="email" id="email" value={email} placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)} required/><span id="emailErr" style={{"color":"red"}}>*</span><br/><br/>

        <label htmlFor="password">Password</label>&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="password" id="password" value={password} name="password" placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required autoComplete=""/><span id="passErr" style={{"color":"red"}}>*</span><br/><br/>
      </div>

      <button
        type="submit"
        id="btnSubmit"
        name="btnSubmit"
        value="submit"
        className="btn btn-success"
      >
        Sign In
      </button>&nbsp;&nbsp;&nbsp;&nbsp;
      <button
        type="reset"
        name="btnReset"
        id="btnReset"
        className="btn btn-primary"
        onClick={resetForm}>
        Clear
      </button><br/>
      <Link to="/newFreelancer">New User???</Link>
    </form>
  );
}
