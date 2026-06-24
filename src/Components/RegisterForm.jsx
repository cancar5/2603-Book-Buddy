import { useState } from "react";

import { useAuth } from "../Context/AuthContext";

//keep it consistent for what you have in input field
//create state for email and password
function RegisterForm() {
  const { registerUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //insert event handler
  //need to update state
  //go into return and create onChange
  const handleEmailChange = (event) => {
    setEmail(event.target.value); //want state to be empty string
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    //to keep it from refreshing use "prevent default"
    event.preventDefault();

    //object that will be used for api
    const credentials = {
      email: email,
      password: password,
    };

    await registerUser(credentials);

    setEmail("");
    setPassword("");
  };

  return (
    <form className="auth-form">
      <h2>Create Account</h2>
      <label>
        First Name:
        <input type="text" />
      </label>
      <label>
        Last Name:
        <input type="text" />
      </label>
      <label>
        Email:
        <input type="text" onChange={handleEmailChange} value={email} />
      </label>
      <label>
        Password:
        <input
          type="password"
          onChange={handlePasswordChange}
          value={password}
        />
      </label>
      <button type="submit" onClick={handleSubmit}>
        Create Account
      </button>
    </form>
  );
}
export default RegisterForm;
