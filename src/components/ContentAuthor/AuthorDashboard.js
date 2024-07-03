import React from 'react';
import { Link } from 'react-router-dom';

const AuthorDashboard = () => (
    <div>
        <h2>Author Dashboard</h2>
        <Link to="/author/create-content">Create Content</Link>
        <Link to="/author/content-list">My Content</Link>
    </div>
);

export default AuthorDashboard;