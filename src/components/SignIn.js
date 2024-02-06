import React from "react";
import "../styles/SignIn.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="login-div">
      <div className="login-container">
        <div className="login-card">
          <h2>Login</h2>
          <form>
            <div className="input-container">
              <i className="fa fa-envelope icon"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-container">
              <i className="fa fa-lock icon"></i>
              <input type="password" placeholder="Password" />
            </div>
            <button type="submit">Login</button>
          </form>
          <Link className="link-tag" to="/signup">Create A New Account?</Link>
        </div>
      </div>  
    </div>
  );
}

export default SignIn;
