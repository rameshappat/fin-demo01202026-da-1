import React, { useState } from 'react';
import './styles.css';

function App() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        mfaMethod: 'otp'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                alert('Registration successful');
            } else {
                alert('Registration failed');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred during registration');
        }
    };

    return (
        <div className="container">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <select name="mfaMethod" value={formData.mfaMethod} onChange={handleChange}>
                    <option value="otp">OTP</option>
                    <option value="authenticator">Authenticator App</option>
                    <option value="biometric">Biometric</option>
                </select>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default App;