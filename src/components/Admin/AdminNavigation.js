import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/admin/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/admin/users">Manage Users</Link>
                </li>
                <li>
                    <Link to="/admin/packages">Manage Packages</Link>
                </li>
                <li>
                    <Link to="/admin/discounts">Manage Discounts</Link>
                </li>
            </ul>
        </nav>
    );
};

export default AdminNavigation;