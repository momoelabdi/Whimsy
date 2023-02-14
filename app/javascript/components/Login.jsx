import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const onChange = (event, setFunction) => {
        setFunction(event.target.value);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const token = document.querySelector('meta[name="csrf-token"]').content;
            const response = await fetch("/api/v1/users/sign_in", {
                method: "POST",
                headers: {
                    "X-CSRF-Token": token,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            if (!response.ok) {
                throw new Error("Login failed");
            }
            console.log("login successful");
            navigate("/listings");
        } catch (error) {
            console.log(error.message);
        }
    }
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
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </form>
        </div>
    );
}
export default Login;