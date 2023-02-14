import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const navigate = useNavigate();
  const onChange = (event, setFunction) => {
    setFunction(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const token = document.querySelector('meta[name="csrf-token"]').content;
      const response = await fetch("/api/v1/users", {
        method: "POST",
        headers: {
        "X-CSRF-Token": token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
         email,
          password,
          password_confirmation,
        
        }),
      });
      if (!response.ok) {
        throw new Error("Sign up failed");
      }
      console.log("sign up successful");
      navigate("/listings");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(event) => onChange(event, setEmail)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={(event) => onChange(event, setPassword)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            name="password_confirmation"
            className="form-control"
            onChange={(event) => onChange(event, setPasswordConfirmation)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
