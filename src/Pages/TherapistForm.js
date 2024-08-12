import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [experience, setExperience] = useState("");
    const [contacts, setContacts] = useState("");
    const [certification, setCertification] = useState(null);
    const [profilePicture, setProfilePicture] = useState(null);
    const [acceptLGBTQ, setAcceptLGBTQ] = useState(false);

    const auth = getAuth();
    const navigate = useNavigate();

    const handleCertificationUpload = (event) => {
        setCertification(event.target.files[0]);
    };

    const handleProfilePictureUpload = (event) => {
        setProfilePicture(event.target.files[0]);
    };

    const handleRegister = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("Registered user: ", user);
                setEmail("");
                setPassword("");
                // Navigate to another page after successful registration, for example:
                navigate('/therapist-dashboard');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error occurred:", errorCode, errorMessage);
            });
    };

    return (
        <div>
            <h1>Therapist Registration</h1>
            Email:
            <br />
            <input
                type="email"
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
            Name:
            <br />
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <br />
            Age:
            <br />
            <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
            />
            <br />
            Gender:
            <br />
            <input
                type="text"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
            />
            <br />
            Specialization:
            <br />
            <input
                type="text"
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
                required
            />
            <br />
            Years of Experience:
            <br />
            <input
                type="number"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                required
            />
            <br />
            Contacts:
            <br />
            <input
                type="text"
                value={contacts}
                onChange={(e) => setContacts(e.target.value)}
                required
            />
            <br />
            Profile Picture:
            <br />
            <input
                type="file"
                onChange={handleProfilePictureUpload}
                required
            />
            <br />
            Certification Documents:
            <br />
            <input
                type="file"
                onChange={handleCertificationUpload}
                required
            />
            <br />
            <label>
                <input
                    type="checkbox"
                    checked={acceptLGBTQ}
                    onChange={(e) => setAcceptLGBTQ(e.target.checked)}
                />
                I accept LGBTQ+ clients
            </label>
            <br />
            <button onClick={handleRegister}>Register</button>
            <p>Already have an account? <Link activeClass="active" to="/login" className="login">Log in</Link></p>
        </div>
    );
};

export default Register;

