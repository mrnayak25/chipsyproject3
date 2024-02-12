import React, { useContext, useEffect, useState } from "react";
import "../styles/SignIn.css";
import '@fortawesome/fontawesome-free/css/all.css'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";

function SignUp() {
  const updatecontext= useContext(AuthContext)
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    "email": "",
    "username": "",
    "password": "",
    "firstName": "",
    "lastName": "",
    "city": "",
    "street": "",
    "zipcode": "",
    "phone": "",
    "currentuser":"true"
  });
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(formData));
    console.log('Logged in:', formData);
    updatecontext.setUser(formData)
    updatecontext.setLogedIn(true)
    navigate("/");
  }

  return (
    <div className="login-div">
      <div className="signup-container">
        <div className="signup-card">
          <h2>Signup</h2>
          <form onSubmit={handleSubmit}>
            <div className="d-flex">
            <div className="input-container">
              <i className="fa fa-user icon"></i>
              <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
              </div>
            <div className="input-container">
              <i className="fa fa-envelope icon"></i>
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            </div>
            </div>
            <div className="input-container">
              <i className="fa fa-lock icon"></i>
              <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}/>
            </div>
            <div className="d-flex">
            <div className="input-container">
              <i className="fa fa-user icon"></i>
              <input type="text" name="firstName" placeholder="First Name" value={formData.firstName}onChange={handleChange}/>
            </div>
            <div className="input-container">
              <i className="fa fa-user icon"></i>
              <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange}/>
            </div>
            </div>
            <div className="d-flex">
            <div className="input-container">
              <i className="fa fa-home icon"></i>
              <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
            </div>
            <div className="input-container">
              <i className="fa fa-home icon"></i>
              <input type="text" name="street" placeholder="Street" value={formData.street} onChange={handleChange} />
            </div>
            <div className="input-container">
              <i className="fa fa-home icon"></i>
              <input
                type="text"
                name="zipcode"
                placeholder="Zipcode"
                value={formData.zipcode}
                onChange={handleChange}
              />
            </div>
            </div>
            <div className="input-container">
              <i className="fa fa-phone icon"></i>
              <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
            </div>
            <button type="submit">Signup</button>
          </form>
          <Link className="link-tag" to="/signin">Already have an Account?</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
