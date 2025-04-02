import React, { useState } from 'react';
import './EditDropdown.css';

export default function EditDropdown({ title }) {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]); // Store added items

  const handleAdd = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const handleRemove = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="dropdown-container">
      <input 
        type="text" 
        placeholder={`Enter ${title} name`} 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <div className="button-container">
        <button onClick={handleAdd}>Add</button>
        <button className="remove-btn">Remove</button>
      </div>

      {/* Show added items */}
    </div>
  );
}
