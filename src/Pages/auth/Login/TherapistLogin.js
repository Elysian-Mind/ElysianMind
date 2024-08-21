import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleTherapistLogin, handleSendPasswordResetEmail } from '../Semi-Components/utils';
import { Link } from 'react-router-dom';


function TherapistLogin() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        resetEmail: '',
        // uid: '',

    });
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isForgotPasswordMode, setIsForgotPasswordMode] = useState(false);

    const navigate = useNavigate();  // Hook for navigation

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleLoginsubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Update formData with the new uid
        setFormData((prevFormData) => ({
            ...prevFormData,
            uid: 'uid' // Use the actual UID logic here
        }));

        try {
            if (isForgotPasswordMode) {
                await handleSendPasswordResetEmail(formData.resetEmail);
                setSuccessMessage('Password reset email sent successfully!');
            } else {
                const message = await handleTherapistLogin(formData, navigate); // Pass navigate to handleLogin
                setSuccessMessage(message);
            }
        } catch (error) {
            setErrorMessage(error.message || 'An error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    const toggleForgotPasswordMode = () => {
        setIsForgotPasswordMode(!isForgotPasswordMode);
        setFormData({ email: '', password: '', resetEmail: '' });
    };

    return (
        <div>
            <form className='form-container' onSubmit={handleLoginsubmit}>
                <h1>Login As a Therapist</h1>
                {isForgotPasswordMode ? (
                    <div>
                        <input
                            name='resetEmail'
                            type='email'
                            placeholder='Email Address'
                            value={formData.resetEmail}
                            onChange={handleInputChange}
                            required
                        />
                        <button disabled={isLoading || !formData.resetEmail}>
                            {isLoading ? 'Sending Reset Email ...' : 'Reset Password'}
                        </button>
                        <p onClick={toggleForgotPasswordMode}>Back to Login</p>
                    </div>
                ) : (
                    <div>
                        <input
                            name='email'
                            type='email'
                            placeholder='Email Address'
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                        <div>
                            <input
                                name='password'
                                type={isPasswordShown ? 'text' : 'password'}
                                placeholder='Password'
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                            <p onClick={() => setIsPasswordShown(!isPasswordShown)}>
                                {isPasswordShown ? 'Hide' : 'Show'}
                            </p>
                        </div>
                        <button
                            disabled={isLoading || !formData.email || !formData.password}>
                            {isLoading ? 'Logging You in...' : 'Login'}
                        </button>
                        <p onClick={toggleForgotPasswordMode} className='link'>Forgot Password</p>
{/* <button type='button' onClick={() => fetchUserType("KsmskadY4Ik9unVNb58e").then((res) => {
                            console.log ("fetch user success" + res)
                        }
                        ).catch((error) =>{
                            console.log ("not successful" + error)
                        })
                        }>Click</button>  */}
                        
                    </div>
                )}

                <p>Or Register with us Today. <Link to='/signup'>Sign up</Link></p>
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
    );
}

export default TherapistLogin