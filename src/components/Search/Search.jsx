import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import ListResult from "../ListResult/ListResult";

import './Search.css';

const Search = () => {

    const [startDate, setStartDate] = React.useState(null);
    const [selectedOrigin, setSelectedOrigin] = useState('');
    const [selectedDestination, setSelectedDestination] = useState('');
    const [selectedPerson, setSelectedPerson] = useState('1');
    const [tickets, setTickets] = useState([]); 

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const origins = [
        { value: 'MOW', label: 'Moscow' },
        { value: 'DXB', label: 'Dubai' },
        { value: 'KZN', label: 'Kazan' },
    ];

    const destinations = [
        { value: 'HKT', label: 'Phuket' },
        { value: 'MOW', label: 'Moscow' },
        { value: 'DXB', label: 'Dubai' },
    ];

    const persons = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
    ];

    const ticketsAvailable = [
        { origin: 'MOW', destination: 'HKT', departure_at: '2023-07-15', price: 10000 },
        { origin: 'MOW', destination: 'DXB', departure_at: '2023-08-01', price: 15000 },
        { origin: 'KZN', destination: 'HKT', departure_at: '2023-09-10', price: 12000 },
    ];

    const handleOriginChange = (event) => {
        setSelectedOrigin(event.target.value);
    };

    const handleDestinationChange = (event) => {
        setSelectedDestination(event.target.value);
    };

    const handlePersonChange = (event) => {
        setSelectedPerson(event.target.value);
    };

    useEffect(() => {
        fetchTicketsFromFile();
    }, []);

    const fetchTicketsFromFile = async () => {
        try {
            const response = await fetch('tickets.txt');
            const text = await response.text();
            const ticketData = text.split('\n').map(line => {
                const [origin, destination, departure_at, price] = line.split(',');
                return { origin, destination, departure_at, price };
            });
            setTickets(ticketData);
        } catch (error) {
            console.error('Ошибка при загрузке билетов:', error);
        }
    };

    const handleSearch = () => {
        // Логика поиска билетов будет реализована здесь
        // В данный момент просто выводим существующие билеты
        // ...
    };

    return (
        <div className='form'>
            <select 
                className='select' 
                placeholder={'Origin'}
                value={selectedOrigin} 
                onChange={handleOriginChange}>
                <option value="">Origin</option>
                {origins.map((origin) => (
                    <option key={origin.value} value={origin.value}>
                        {origin.label}
                    </option>
                ))}
            </select>
            <select 
                className='select' 
                placeholder={'Destination'} 
                value={selectedDestination} 
                onChange={handleDestinationChange}>
                <option value="">Destination</option>
                {destinations.map((destination) => (
                    <option key={destination.value} value={destination.value}>
                        {destination.label}
                    </option>
                ))}
            </select>
            <select 
                className='select' 
                placeholder={'Person'} 
                value={selectedPerson} 
                onChange={handlePersonChange}>
                {persons.map((person) => (
                    <option key={person.value} value={person.value}>
                        {person.label}
                    </option>
                ))}
            </select>
            <div className='date_choice'>
                <DatePicker
                    selected={startDate}
                    onChange={handleStartDateChange}
                    dateFormat="MMMM d, yyyy"
                    className='date_choice_picker'
                    placeholderText="Departure Date"
                />
            </div>
            <button className='button_search' onClick={handleSearch}>Search</button>
            <div className='result_list_settings'>
                <button className='result_list_settings_button'>Filtrs</button>
                <button className='result_list_settings_button'>Sort</button>
            </div> 
            {/* Отображение результата поиска */}
            <ListResult tickets={ticketsAvailable} /> 
        </div>
    )
}

export default Search;