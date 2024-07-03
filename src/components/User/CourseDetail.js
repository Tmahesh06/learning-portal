import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
    const { courseId } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        const fetchCourse = async () => {
            const response = await axios.get(`/courses/${courseId}`);
            setCourse(response.data);
        };
        fetchCourse();
    }, [courseId]);

    if (!course) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <video src={course.videoUrl} controls></video>
        </div>
    );
};

export default CourseDetail;