import React from 'react';


import './ListResult.css'

const ListResult = ({ tickets }) => {

    const Line = () => (
        <hr className="listresult_line_hr" /> // hr - горизонтальная линия
    );      

    if (!tickets || tickets.length === 0) {
        return <p className='no-found'>No tickets found</p>;
    }
    return (
            <ul className='listresult_ul'>
                <h3>SEARCHING RESULTS</h3>
                {tickets.map((ticket, index) => (
                <div className='listresult'>
                    <li key={index} className='listresult_li'>
                        <div className='listresult_header'>
                            <div className='listresult_price'>
                                <h3 className='listresult_h3'>$ {ticket.price}</h3>
                                <p className='listresult_num_per'>for 2 person</p>
                            </div>
                            <img src="/assets/img/Aeroflot.png" alt="avialogo" className='listresult_img'/>
                        </div>
                        <div className='listresult_body'>
                            <div className='listresult_start_end'>
                                <h5 className='listresult_city'>{ticket.origin}</h5>
                                <p className='listresult_time'>10:05</p>
                                <h6 className='listresult_date'>{ticket.departure_at}</h6>
                            </div>
                            <div className='listresult_line'>
                                <p>8ч 20мин в пути</p>
                                <Line className='listresult_line_hr'/> {/* Вставляем компонент линии */}
                                <p>без пересадок</p>
                            </div>
                            <div className='listresult_start_end'>
                                <h5 className='listresult_city'>{ticket.destination}</h5>
                                <p className='listresult_time'>18:35</p>
                                <h6 className='listresult_date'>{ticket.departure_at}</h6>
                            </div>
                        </div>
                    </li>
                </div>
                ))}
            </ul>
        
    );
};

export default ListResult;