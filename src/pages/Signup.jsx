import React, { useState } from "react";
import { Form } from "../components";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <div className="singup-page">
      <Form
        type="signup"
        handleSubmit={(e) => {
          e.preventDefault();
          if (password === confirmPassword) {
            alert(`Success! Your email is: ${email}, and your password is ${password}`);
          } else {
            alert("Password and cofirm password doesnt match");
          }
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
        confirmPassword={confirmPassword}
        onChangeConfirmPassword={(e) => {
          setConfirmPassword(e.target.value);
          console.log(confirmPassword);
        }}
      />
    </div>
  );
};

export default Signup;
