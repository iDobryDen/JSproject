import React from 'react';

import './ListResult.css'

const ListResult = ({ tickets }) => {
    if (!tickets || tickets.length === 0) {
        return <p>No tickets found</p>;
    }
    return (
        <ul>
            {tickets.map((ticket, index) => (
                <li key={index}>
                    From: {ticket.origin} to {ticket.destination} on {ticket.departure_at} - Price: {ticket.price}
                </li>
            ))}
        </ul>
    );
};

export default ListResult;