import axios from "axios";
import { useState } from "react";


export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("/users.json", params)
      .then((response) => {
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h1>Sign Up</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="inputname" className="form-label" >Name:</label>
          <input name="name" type="text" className="form-control" id="inputEmail4" placeholder="John Doe" required/>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputemail" className="form-label">Email:</label>
          <input name="email" type="text" className="form-control" id="inputPassword4" placeholder="user@test.com" required/>
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">Password:</label>
          <input name="password" type="password" className="form-control" id="inputAddress" placeholder="8-20 Characters" maxLength={20} required/>
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">Password Confirmation:</label>
          <input name="password_confirmation" type="password" className="form-control" id="inputAddress2" placeholder="8-20 Characters" maxLength={20} required/>
        </div>
        <div className="col-12">       
          <label htmlFor="image_url" className="form-label">Profile Photo:</label>
          <input name="image_url" className="form-control" type="file" id="image_url"/>
        </div>
        
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck"/>
            <label className="form-check-label" htmlFor="gridCheck">
              Agree To Terms & Conditions
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Create Account</button>
        </div>
      </form>
    </div>
  );
}