import { useState, useRef, useEffect } from 'react';
import '../styles/DisplaySelector.css';
import display from '../assets/Display.svg';
import down from '../assets/down.svg';

const DisplaySelector = (props) => {
  const { grouping, setGrouping, ordering, setOrdering } = props;
  const [isMainOpen, setIsMainOpen] = useState(false);
  const dropdownRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMainOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="dropdown-wrapper" ref={dropdownRef}>
      <button 
        className={`display-button ${isMainOpen ? 'active' : ''}`}
        onClick={() => setIsMainOpen(!isMainOpen)}
      >
        
        <div className="display-icon">
            <img src={display} alt="display"  />
        </div>
        <span>Display</span>
        <div className='down-icon'>
            <img src={down} alt="down arrow"  />
        </div>
       
      </button>

      {isMainOpen && (
        <div className="dropdown-menu">
          <div className="menu-item">
            <label>Grouping</label>
            <div className="select-container">
              <select 
                value={grouping} 
                onChange={(e) => setGrouping(e.target.value)}
              >
                <option value="Status">Status</option>
                <option value="User">User</option>
                <option value="Priority">Priority</option>
              </select>
            </div>
          </div>

          <div className="menu-item">
            <label>Ordering</label>
            <div className="select-container">
              <select 
                value={ordering} 
                onChange={(e) => setOrdering(e.target.value)}
              >
                <option value="Priority">Priority</option>
                <option value="Title">Title</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplaySelector;