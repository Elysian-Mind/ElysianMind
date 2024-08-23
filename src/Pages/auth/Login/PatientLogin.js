import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handlePatientLogin, handleSendPasswordResetEmail } from '../Semi-Components/utils';
import { Link } from 'react-router-dom';
import '../Login/PatientLogin.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function PatientLogin() {
        const [formData, setFormData] = useState({
            email: '',
            password: '',
            resetEmail: '',
        });
        const [isLoading, setIsLoading] = useState(false);
        const [errorMessage, setErrorMessage] = useState(null);
        const [successMessage, setSuccessMessage] = useState(null);
        const [isPasswordShown, setIsPasswordShown] = useState(false);
        const [isForgotPasswordMode, setIsForgotPasswordMode] = useState(false);
    
        const navigate = useNavigate();
    
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
            setErrorMessage(null);
            setSuccessMessage(null);
    
            try {
                if (isForgotPasswordMode) {
                    await handleSendPasswordResetEmail(formData.resetEmail);
                    setSuccessMessage('Password reset email sent successfully!');
                } else {
                    const message = await handlePatientLogin(formData);
                    setSuccessMessage(message);
                    navigate('/')
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
                    <h1>Login : Patient</h1>
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
                            <div id='password'>
                                <input
                                    name='password'
                                    type={isPasswordShown ? 'text' : 'password'}
                                    placeholder='Password'
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                    
                                />
                                <p className='visibility' onClick={() => setIsPasswordShown(!isPasswordShown)}>
                                    {isPasswordShown ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                </p>
                            </div>
                            <p onClick={toggleForgotPasswordMode} className='link'>Forgot Password?</p>


                            <button
                                disabled={isLoading || !formData.email || !formData.password}>
                                {isLoading ? 'Logging You in...' : 'Login'}
                            </button>
                        </div>
                    )}
    
                    <p className='register'>Or Register with us Today here :  <Link className='sign' to='/Signup'>Sign up</Link></p>
                </form>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}
            </div>
        );
    }
    
export default PatientLogin;
