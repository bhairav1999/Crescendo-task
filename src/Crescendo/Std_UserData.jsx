import React, { useState } from "react";
import "./UserData.css"

function Std_UserData() {
  return (

<div class="container">
  <div class="row">
    <div class="col">
    <h2 className="mt-5">Login Form</h2>
      <LoginForm />
    </div>
    <div class="col">
    <h2>Registration Form</h2>
      <RegistrationForm />
    </div>
  </div>
  <div class="row">
    <div class="col">
    <h2>Registration Data</h2>
      <RegistrationData />
    </div>
    <div class="col">
     
    </div>
  </div>
  </div>

    
  
  );
}

function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const handleNameChange = (event) => {
    setName(event.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
  };

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, mobile: "" }));
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, username: "" }));
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate form data
    const errors = {};
    if (!name) {
      errors.name = "Please enter your name";
    }
    if (!email) {
      errors.email = "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!mobile) {
      errors.mobile = "Please enter your mobile number";
    } else if (!/^[0-9]+$/.test(mobile)) {
      errors.mobile = "Please enter a valid mobile number";
    }
    if (!username) {
      errors.username = "Please enter a username";
    }
    if (!password) {
      errors.password = "Please enter a password";
    }

    // Update errors state and return if there are any errors
    if (Object.keys(errors).length) {
      setErrors(errors);
      return;
    }
    // Save registration data to localStorage and show success message
    const registrationData = { name, email, mobile, username, password };
    localStorage.setItem("registrationData", JSON.stringify(registrationData));
    alert("Registration successful!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={handleNameChange}
        required
        placeholder="Enter your name"
      />
      {errors.name && <span className="error">{errors.name}</span>}
      <br />
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={handleUsernameChange}
        required
        placeholder="Enter your Username"
      />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
        required
        placeholder="Enter your Email"
      />
      {errors.email && <span className="error">{errors.email}</span>}
      <br />
      <label htmlFor="mobile">Mobile:</label>
      <input
        type="tel"
        id="mobile"
        value={mobile}
        onChange={handleMobileChange}
        required
        placeholder="Enter your Mobile"
      />
      {errors.mobile && <span className="error">{errors.mobile}</span>}
      <br />
      
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
        required
        placeholder="Enter your password"
      />
      <br />
      <button type="submit">Register</button>
    </form>
  );
}

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const registrationData = JSON.parse(
      localStorage.getItem("registrationData")
    );
    if (
      registrationData &&
      registrationData.username === username &&
      registrationData.password === password
    ) {
      alert("Login successful!");
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={handleUsernameChange}
        required
        placeholder="Enter your username"
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
        required
        placeholder="Enter your password"
      />
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

function RegistrationData() {
  const registrationData = JSON.parse(localStorage.getItem("registrationData"));

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Username</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{registrationData?.name}</td>
          <td>{registrationData?.email}</td>
          <td>{registrationData?.mobile}</td>
          <td>{registrationData?.username}</td>
          <td>{registrationData?.password}</td>
        </tr>
      </tbody>
    </table>
  );
}
export default Std_UserData;
