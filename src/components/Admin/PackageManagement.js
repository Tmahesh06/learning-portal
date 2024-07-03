import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PackageManagement = () => {
    const [packages, setPackages] = useState([]);
    const [newPackage, setNewPackage] = useState({ name: '', price: '' });

    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const response = await axios.get('/admin/packages');
                setPackages(response.data);
            } catch (error) {
                console.error('Error fetching packages', error);
            }
        };
        fetchPackages();
    }, []);

    const handleCreatePackage = async () => {
        try {
            const response = await axios.post('/admin/packages', newPackage);
            setPackages([...packages, response.data]);
            setNewPackage({ name: '', price: '' });
        } catch (error) {
            console.error('Error creating package', error);
        }
    };

    return (
        <div>
            <h2>Package Management</h2>
            <div>
                <input
                    type="text"
                    placeholder="Package Name"
                    value={newPackage.name}
                    onChange={(e) => setNewPackage({ ...newPackage, name: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={newPackage.price}
                    onChange={(e) => setNewPackage({ ...newPackage, price: e.target.value })}
                />
                <button onClick={handleCreatePackage}>Create Package</button>
            </div>
            <ul>
                {packages.map(pkg => (
                    <li key={pkg.id}>
                        {pkg.name} - ${pkg.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PackageManagement;