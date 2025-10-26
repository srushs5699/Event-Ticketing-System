import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Events from './components/Events';
import AuthService from './services/auth.service';

function App() {
    const navigate = useNavigate();
    // Simple check. In a real app, you'd use Context or Redux
    const isLoggedIn = !!localStorage.getItem('token');

    const handleLogout = () => {
        AuthService.logout();
        navigate('/login');
        window.location.reload(); // Force reload to update nav
    };

    return (
        <div>
            <nav style={{ padding: '1rem', background: '#eee' }}>
                <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
                {isLoggedIn ? (
                    <>
                        <Link to="/events" style={{ marginRight: '1rem' }}>Events</Link>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login" style={{ marginRight: '1rem' }}>Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </nav>

            <div style={{ padding: '1rem' }}>
                <Routes>
                    <Route path="/" element={<h1>Welcome to the Ticketing System</h1>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/events" element={<Events />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;