import React from 'react';
import { useParams } from 'react-router-dom';

import './ListDetail.css'

const ListDetail = ({ tickets }) => {  

    const { ticketId } = useParams();

    const ticket = tickets.find(t => t.id === parseInt(ticketId, 10));

    if (!ticket) {
        return <p>Ticket not found</p>;
    }

    return (
                <div className='list_detail'>
                    <h3>FLIGHT DETAIL</h3>
                    <div className='flight_detail'>
                        <div className='flight_detail_header'>
                            <div className='flight_detail_price'>
                                <h3 className='flight_detail_h3'>$ {ticket.price} </h3>
                                <p className='flight_detail_num_per'>for 2 person</p>
                            </div>
                        </div>
                        <hr className='flight_detail_hr'/>
                        <div className='flight_detail_body'>
                                <p>Багаж</p>
                                <p>Ручная кладь</p>
                                <p>Возврат платный</p>
                        </div>
                    </div>
                    <h3 className='there_h3'>THERE</h3>
                    <div className='flight_detail'>
                    <div className='there_header'>
                        <img src="/assets/img/Aeroflot_full.jpg" alt="avialogo" className='flight_detail_img'/>
                        <div className='flight_num'>
                        <p className='flight_num_p'>flight № </p>
                        <h3 className='flight_detail_h3'> MU 8648</h3>
                        </div>
                    </div>
                    <div className='flight_detail_container'> {/* Новый контейнер */}
                        <div className='flight_detail_line'> {/* Вертикальная линия */}</div>
                            <div className='flight_detail_body'>
                                <div className='origin'>
                                    <div className='origin_first'>
                                        <div className='origin_date_time'>
                                            <p className='origin_main'>21:05</p>
                                            <h6 className='additionally'>{ticket.departure_at}</h6>
                                        </div>
                                        <div>
                                            <p className='origin_main'>Moscow Russia</p>
                                            <p className='additionally'>{ticket.origin}, Sheremetevo</p>
                                        </div>
                                    </div>
                                    <div >
                                        <p className='transfer'>Без пересадок - 10ч в пути</p>
                                    </div>
                                    <div className='origin_first'>
                                        <div className='origin_date_time'>
                                            <p className='origin_main'>10:35</p>
                                            <h6 className='additionally'>{ticket.departure_at}</h6>
                                        </div>
                                        <div>
                                            <p className='origin_main'>Phuket Thailand</p>
                                            <p className='additionally'>{ticket.destination}, Phuket</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    </div>
                    {/*<h3>BACK</h3>
                    <div className='flight_detail'>
                        <div className='flight_detail_header'>

                        </div>
                        <div className='flight_detail_body'>

                        </div>
                    </div>*/}
                    <div className='choose'>
                        <button className='button_choose'>Выбрать</button>
                    </div>
                </div>
    );
};

export default ListDetail;