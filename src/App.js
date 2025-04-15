// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import pages
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import Resources from './pages/Resources';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

// Import common components
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Navigation />
        
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
