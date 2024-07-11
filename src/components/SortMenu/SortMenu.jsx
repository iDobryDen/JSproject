import React from 'react';
import './SortMenu.css';

const SortMenu = ({ isOpen, onClose, onSortChange }) => {
  return (
    <div className={`sort_menu ${isOpen ? 'open' : ''}`}> 
        <div className="sort_menu_content">
            <button onClick={onClose} className="sort_menu_close">
                Close
            </button>
            <div className='row' onClick={() => onSortChange('price')}>
                <span className='sort_button'>Price</span>
                <img src="" alt="price" />
            </div>
            <div className='row'>
                <span className='sort_button'>Time</span>
                <img src="" alt="Time" />
            </div>
        </div>
    </div>
  );
};

export default SortMenu;