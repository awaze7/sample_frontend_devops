import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AddDetailsPage from './components/AddDetailsPage';
import ViewEmployeesPage from './components/ViewEmployeesPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/add-details" element={<AddDetailsPage />} />
                <Route path="/view-employees" element={<ViewEmployeesPage />} />
            </Routes>
        </Router>
    );
}

export default App;
