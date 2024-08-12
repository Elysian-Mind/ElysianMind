import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = getAuth();
    const navigate = useNavigate();

    const handleRegister = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("Registered user: ", user);
                setEmail("");
                setPassword("");
                navigate("/login"); // Redirect to the login page after successful registration
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error occurred:", errorCode, errorMessage);
            });
    };

    return (
        <div>
            <h1>Register</h1>
            Email:
            <br />
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <br />
            Password:
            <br />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <br />
            <button onClick={handleRegister}>Register</button>
            <p>
                Already have an account?{" "}
                <Link to="/login" className="login">Log in</Link>
            </p>
        </div>
    );
};

export default Register;
