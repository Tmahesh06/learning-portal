import React from 'react';
import { Link } from 'react-router-dom';

const LearnerDashboard = () => (
    <div>
        <h2>Learner Dashboard</h2>
        <Link to="/learner/courses">My Courses</Link>
    </div>
);

export default LearnerDashboard;