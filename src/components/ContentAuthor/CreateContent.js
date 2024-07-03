import React, { useState } from 'react';
import axios from 'axios';

const CreateContent = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [contentType, setContentType] = useState('');
    const [contentUrl, setContentUrl] = useState('');

    const handleCreateContent = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/contents', { title, description, contentType, contentUrl });
            // Handle successful content creation, e.g., navigate to content list or show a success message
            alert("Content created successfully!");
            setTitle('');
            setDescription('');
            setContentType('');
            setContentUrl('');
        } catch (error) {
            console.error('Content creation failed', error);
        }
    };

    return (
        <form onSubmit={handleCreateContent}>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>Description</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <div>
                <label>Content Type</label>
                <select value={contentType} onChange={(e) => setContentType(e.target.value)} required>
                    <option value="">Select Type</option>
                    <option value="video">Video</option>
                    <option value="blog">Blog</option>
                    <option value="article">Article</option>
                </select>
            </div>
            <div>
                <label>Content URL</label>
                <input type="text" value={contentUrl} onChange={(e) => setContentUrl(e.target.value)} required />
            </div>
            <button type="submit">Create Content</button>
        </form>
    );
};

export default CreateContent;