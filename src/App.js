import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Home from './components/User/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AuthorDashboard from './components/ContentAuthor/AuthorDashboard';
import CreateContent from './components/ContentAuthor/CreateContent';
import ContentList from './components/ContentAuthor/ContentList';
import LearnerDashboard from './components/Learner/LearnerDashboard';
import LearnerCourseList from './components/Learner/LearnerCourseList';
import AdminDashboard from './components/Admin/AdminDashboard';
import UserManagement from './components/Admin/UserManagement';
import PackageManagement from './components/Admin/PackageManagement';
import DiscountManagement from './components/Admin/DiscountManagement';
import CourseList from './components/User/CourseList';
import CourseDetail from './components/User/CourseDetail';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/author/dashboard" element={<AuthorDashboard/>} />
                <Route path="/author/create-content" element={<CreateContent/>} />
                <Route path="/author/content-list" element={<ContentList/>} />
                <Route path="/learner/dashboard" element={<LearnerDashboard/>} />
                <Route path="/learner/courses" element={<LearnerCourseList/>} />
                <Route path="/admin/dashboard" element={<AdminDashboard/>} />
                <Route path="/admin/users" element={<UserManagement/>} />
                <Route path="/admin/packages" element={<PackageManagement/>} />
                <Route path="/admin/discounts" element={<DiscountManagement/>} />
                <Route path="/courses" exact element={<CourseList/>} />
                <Route path="/courses/:courseId" element={<CourseDetail/>} />
            </Routes>
        </Router>
    );
};

export default App;