import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SortMenu from '../SortMenu/SortMenu';
import myImage from '../assets/img/Aeroflot.png';

import './ListResult.css'

const ListResult = ({ tickets }) => {
    console.log(tickets);
    const [sortedTickets, setSortedTickets] = useState(tickets);
    const [showSortMenu, setShowSortMenu] = useState(false);

    useEffect(() => {
        setSortedTickets(tickets)
    }, [tickets])

    const handleSortChange = (sortType) => {
        let newTickets = [...tickets]; // Create a copy of the original tickets array
    
        if (sortType === 'price') {
          newTickets.sort((a, b) => a.price - b.price);
        }
        setSortedTickets(newTickets);
      };

    const Line = () => (
        <hr size='3' className="listresult_line_hr" />
    );      

    if (!sortedTickets || sortedTickets.length === 0) {
        return <p className='no-found'>No tickets found</p>;
    }

    return (
        <div className='listresult_div'>
            <h3>SEARCHING RESULTS</h3>
            <div className='result_list_settings'>
                <button className='result_list_settings_button'>Filtrs</button>
                <button className='result_list_settings_button' onClick={() => setShowSortMenu(true)}>Sort</button>
            </div> 
            <ul className='listresult_ul'>
            {sortedTickets.map((ticket, index) => (
            <Link to={`/ticket/${ticket.id}`} key={index} className='listresult' >
                <li key={index} className='listresult_li'>
                    <div className='listresult_header'>
                        <div className='listresult_price'>
                            <h3 className='listresult_h3'>$ {ticket.price}</h3>
                            <p className='listresult_num_per'> for 2 person, #{ ticket.id }</p>
                        </div>
                        <img src={myImage} alt="avialogo" className='listresult_img'/>
                    </div>
                    <div className='listresult_body'>
                        <div className='listresult_start_end'>
                            <h5 className='listresult_city'>{ticket.origin}</h5>
                            <p className='listresult_time'>10:05</p>
                            <h6 className='listresult_date'>{ticket.departure_at}</h6>
                        </div>
                        <div className='listresult_line'>
                            <p>8ч 20мин в пути</p>
                            <Line className='listresult_line_hr'/>
                            <p>без пересадок</p>
                        </div>
                        <div className='listresult_start_end'>
                            <h5 className='listresult_city'>{ticket.destination}</h5>
                            <p className='listresult_time'>18:35</p>
                            <h6 className='listresult_date'>{ticket.departure_at}</h6>
                        </div>
                    </div>
                </li>
            </Link> 
            ))}
        </ul>
        {showSortMenu && (
            <SortMenu
                isOpen={showSortMenu}
                onClose={() => setShowSortMenu(false)} // Close the modal
                onSortChange={handleSortChange}
            />
            )}
        </div>
    );
};

export default ListResult;