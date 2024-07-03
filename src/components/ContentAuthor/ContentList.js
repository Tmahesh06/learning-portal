import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ContentList = () => {
    const [contents, setContents] = useState([]);

    useEffect(() => {
        const fetchContents = async () => {
            try {
                const response = await axios.get('/contents/author/1'); // Assuming author ID is 1 for example
                setContents(response.data);
            } catch (error) {
                console.error('Error fetching contents', error);
            }
        };
        fetchContents();
    }, []);

    return (
        <div>
            <h2>My Contents</h2>
            <ul>
                {contents.map(content => (
                    <li key={content.id}>
                        <Link to={`/contents/${content.id}`}>
                            {content.title} - {content.contentType}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContentList;