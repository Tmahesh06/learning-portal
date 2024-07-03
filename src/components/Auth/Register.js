import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {console.log(username);console.log(password);console.log(role);
            const response = await axios.post('/auth/register', { username, password, role });
            // Handle successful registration
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <div>
                <label>Username</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div>
                <label>Role</label>
                <select value={role} onChange={(e) => setRole(e.target.value)} required>
                    <option value="">Select Role</option>
                    <option value="author">Content Author</option>
                    <option value="user">User</option>
                    <option value="learner">Learner</option>
                    <option value="admin">Admin</option>
                </select>
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;