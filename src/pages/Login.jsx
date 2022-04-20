import React, { useState } from "react";
import { Form } from "../components";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login-page">
      <Form
        type="login"
        handleSubmit={(e) => {
          e.preventDefault();
          console.log(`Username: ${email}, Password: ${password}`);
        }}
        email={email}
        onChangeEmail={(e) => {
          setEmail(e.target.value);
          console.log(email);
        }}
        password={password}
        onChangePassword={(e) => {
          setPassword(e.target.value);
          console.log(password);
        }}
      />
    </div>
  );
};

export default Login;
