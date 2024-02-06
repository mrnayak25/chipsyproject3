import React, { useState } from 'react'
import '../styles/SignIn.css'

function SignUp() {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    city: '',
    street: '',
    number: '',
    zipcode: '',
    lat: '',
    long: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://fakestoreapi.com/users', {
        method: 'POST',
        body: JSON.stringify({
          email: formData.email,
          username: formData.username,
          password: formData.password,
          name: {
            firstname: formData.firstName,
            lastname: formData.lastName
          },
          address: {
            city: formData.city,
            street: formData.street,
            number: formData.number,
            zipcode: formData.zipcode,
            geolocation: {
              lat: formData.lat,
              long: formData.long
            }
          },
          phone: formData.phone
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='login-div'>
    <div className="signup-container">
      <div className="signup-card">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <i className="fa fa-envelope icon"></i>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="input-container">
            <i className="fa fa-user icon"></i>
            <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <i className="fa fa-lock icon"></i>
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}/>
          </div>
          <div className="input-container">
            <i className="fa fa-user icon"></i>
            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange}/>
          </div>
          <div className="input-container">
            <i className="fa fa-user icon"></i>
            <input
              type="text" name="lastName" placeholder="Last Name" value={formData.lastName}onChange={handleChange}/>
          </div>
          <div className="input-container">
            <i className="fa fa-home icon"></i>
            <input type="text" name="city"placeholder="City"value={formData.city} onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <i className="fa fa-home icon"></i>
            <input type="text" name="street" placeholder="Street" value={formData.street} onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <i className="fa fa-home icon"></i>
            <input type="text" name="number" placeholder="Number" value={formData.number} onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <i className="fa fa-home icon"></i>
            <input type="text" name="zipcode" placeholder="Zipcode" value={formData.zipcode} onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <i className="fa fa-globe icon"></i>
            <input type="text"
              name="lat"
              placeholder="Latitude"
              value={formData.lat}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <i className="fa fa-globe icon"></i>
            <input
              type="text"
              name="long"
              placeholder="Longitude"
              value={formData.long}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <i className="fa fa-phone icon"></i>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default SignUp
