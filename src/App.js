import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import ListResult from './components/ListResult/ListResult';
import ListDetail from './components/ListDetail/ListDetail';

function App() {

    const [tickets, setTickets] = useState([]);

    const ticketsAvailable = [
        { id: 1, origin: 'MOW', origin_city_country: 'Moscow Russia', destination: 'HKT', departure_at: '2023-07-15', price: 10000 },
        { id: 2, origin: 'MOW', origin_city_country: 'Moscow Russia', destination: 'DXB', departure_at: '2023-08-01', price: 15000 },
        { id: 3, origin: 'HKT', origin_city_country: 'Phuket Thailand', destination: 'MOW', departure_at: '2023-09-10', price: 12000 },
        { id: 4, origin: 'HKT', origin_city_country: 'Phuket Thailand', destination: 'KZN', departure_at: '2023-09-10', price: 25000 },
        { id: 5, origin: 'KZN', origin_city_country: 'Kazan Russia', destination: 'HKT', departure_at: '2023-09-10', price: 9000 },
        { id: 6, origin: 'KZN', origin_city_country: 'Kazan Russia', destination: 'MOW', departure_at: '2023-09-10', price: 19000 },
      ];
    
    useEffect(() => {
        setTickets(ticketsAvailable); 
      }, []);    

    return (
    <BrowserRouter className="App">
        <Routes>
            {/* <Header /> */}
            {/* <Route path="/" element={<Search tickets={tickets} />} /> */}
            <Route path="/result/" element={<ListResult tickets={tickets} />} />
            <Route path="/ticket/:ticketId" element={<ListDetail tickets={tickets} />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
