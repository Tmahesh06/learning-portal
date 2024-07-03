import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DiscountManagement = () => {
    const [discounts, setDiscounts] = useState([]);
    const [newDiscount, setNewDiscount] = useState({ code: '', percentage: '' });

    useEffect(() => {
        const fetchDiscounts = async () => {
            try {
                const response = await axios.get('/admin/discounts');
                setDiscounts(response.data);
            } catch (error) {
                console.error('Error fetching discounts', error);
            }
        };
        fetchDiscounts();
    }, []);

    const handleCreateDiscount = async () => {
        try {
            const response = await axios.post('/admin/discounts', newDiscount);
            setDiscounts([...discounts, response.data]);
            setNewDiscount({ code: '', percentage: '' });
        } catch (error) {
            console.error('Error creating discount', error);
        }
    };

    return (
        <div>
            <h2>Discount Management</h2>
            <div>
                <input
                    type="text"
                    placeholder="Discount Code"
                    value={newDiscount.code}
                    onChange={(e) => setNewDiscount({ ...newDiscount, code: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Percentage"
                    value={newDiscount.percentage}
                    onChange={(e) => setNewDiscount({ ...newDiscount, percentage: e.target.value })}
                />
                <button onClick={handleCreateDiscount}>Create Discount</button>
            </div>
            <ul>
                {discounts.map(discount => (
                    <li key={discount.id}>
                        {discount.code} - {discount.percentage}%
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DiscountManagement;