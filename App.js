import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreatePost from './CreatePost';
import EditPost from './EditPost';
import PostsList from './PostsList';
import NavigationBar from './Navbar';

const App = () => {
    return (
        <Router>
            <div>
                <NavigationBar />
                <div className="container">
                    <h1 className="my-4">Employee Management System</h1>
                    <Routes>
                    <Route path="/" element={<PostsList />} />
                    <Route path="/create" element={<CreatePost />} />
                    <Route path="/edit/:id" element={<EditPost />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;