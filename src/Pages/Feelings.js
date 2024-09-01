import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import '../Styles/Feelings.css';

const feelingsList = [
  'Anxiety', 'Depression', 'ADHD', 'PTSD', 'Communities', 'Listening'
];

function FeelingSelector({ onFilter }) {
  const [selectedFeeling, setSelectedFeeling] = useState('');

  const handleInputChange = (event) => {
    setSelectedFeeling(event.target.value);
    onFilter(event.target.value);
  };

  return (
    <div className="feeling-selector">
      <div className="search">
        <SearchIcon />
        <input 
          type="text" 
          placeholder="How are you feeling today?" 
          value={selectedFeeling}
          onChange={handleInputChange} 
          list="feelings"
        />
        <datalist id="feelings">
          {feelingsList.map((feeling) => (
            <option key={feeling} value={feeling} />
          ))}
        </datalist>
      </div>
    </div>
  );
}

export default FeelingSelector;
