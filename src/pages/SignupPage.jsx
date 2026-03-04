import React, { useState } from 'react';
import { useUser } from '../lib/context/user';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const { register } = useUser();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await register(email, password, name);
        } catch (err) {
            setError(err.message || 'Failed to create account');
        }
    };

    return (
        <div className="auth-container solo-page">
            <div className="auth-card">
                <div className="auth-header">
                    <h1>Create Account</h1>
                    <p>Join our robotics community today</p>
                </div>

                {error && <div className="auth-error">{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                            placeholder="name@company.com"
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                            placeholder="••••••••"
                        />
                    </div>
                    <button type="submit" className="auth-btn primary">Create Account</button>
                </form>

                <div className="auth-divider">
                    <span>OR</span>
                </div>

                <div className="auth-footer">
                    <p>Already have an account?</p>
                    <Link to="/login" className="signup-link">Login to your account</Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;

