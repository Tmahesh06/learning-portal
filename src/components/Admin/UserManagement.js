import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserManagement = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('/admin/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users', error);
            }
        };
        fetchUsers();
    }, []);

    const handleBlockUnblock = async (userId, block) => {
        try {
            await axios.put(`/admin/users/${userId}/block`, { block });
            setUsers(users.map(user => user.id === userId ? { ...user, blocked: block } : user));
        } catch (error) {
            console.error('Error updating user status', error);
        }
    };

    return (
        <div>
            <h2>User Management</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                        <button onClick={() => handleBlockUnblock(user.id, !user.blocked)}>
                            {user.blocked ? 'Unblock' : 'Block'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserManagement;