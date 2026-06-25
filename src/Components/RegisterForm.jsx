import { useState } from "react";

import { useAuth } from "../Context/AuthContext";

//keep it consistent for what you have in input field
//create state for email and password
function RegisterForm() {
  const { registerUser } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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
      firstname: firstName,
      lastname: lastName,
      email,
      password,
    };

    await registerUser(credentials);

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Create Account</h2>
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
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
      <button type="submit">Create Account</button>
    </form>
  );
}
export default RegisterForm;
