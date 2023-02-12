import React from "react";
import { useState } from "react";

const SignUp = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    const handleSubmit = async event => {
        event.preventDefault();
        
    }



    return (
        <div>
        <h1>Sign Up</h1>
        </div>
    );
    };

export default SignUp;