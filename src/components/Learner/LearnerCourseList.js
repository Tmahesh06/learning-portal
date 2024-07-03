import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LearnerCourseList = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            const response = await axios.get('/learner/courses');
            setCourses(response.data);
        };
        fetchCourses();
    }, []);

    return (
        <div>
            <h2>My Courses</h2>
            <ul>
                {courses.map(course => (
                    <li key={course.id}>{course.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default LearnerCourseList;