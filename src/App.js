import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({ text: '', key: '' });

  const handleInput = (e) => {
    setCurrentItem({ ...currentItem, text: e.target.value, key: Date.now() });
    // console.log(currentItem.text);
    // console.log(currentItem.key);
  };
  const addItem = (e) => {
    e.preventDefault();
    const newItem = currentItem;
    if (newItem.text !== '') {
      setItems([...items, currentItem]);
      console.log('Current items: ', items);
    }
    setCurrentItem({ text: '', key: '' });
  };

  return (
    <div>
      <div className='App'>
        <header>
          <form id='to-do-form' onSubmit={(e) => addItem(e)}>
            <input
              type='text'
              placeholder='Bitte geben den Text'
              value={currentItem.text}
              onChange={(e) => handleInput(e)}
            />
            <button type='add'>hinzufügen</button>
          </form>
        </header>
      </div>
    </div>
  );
};

export default App;
