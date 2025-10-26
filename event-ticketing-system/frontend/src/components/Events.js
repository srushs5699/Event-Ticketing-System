import React, { useState, useEffect } from 'react';
import api from '../services/api'; // Our configured axios instance

const Events = () => {
    const [events, setEvents] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        // This is a public endpoint, but we use 'api' to show how
        // protected requests would work.
        api.get('/events')
            .then(response => {
                setEvents(response.data);
            })
            .catch(error => {
                setError('Could not fetch events. Are you logged in?');
                console.error('Error fetching events:', error);
            });
    }, []);

    if (error) {
        return <p style={{ color: 'red' }}>{error}</p>;
    }

    return (
        <div>
            <h2>Available Events</h2>
            {events.length === 0 ? (
                <p>No events found. (An ADMIN user may need to create one).</p>
            ) : (
                <ul>
                    {events.map(event => (
                        <li key={event.id}>
                            <strong>{event.name}</strong> - {new Date(event.eventDate).toLocaleString()}
                            <p>{event.description}</p>
                            <p>Tickets left: {event.availableTickets}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Events;