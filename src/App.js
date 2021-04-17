import React, { useState } from 'react';
import ListItems from './ListItems';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

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

  const deleteItem = (key) => {
    console.log(key);
    const filteredItems = items.filter((item) => item.key !== key);
    console.log(filteredItems);
    const arr = [];
    setItems([...arr]);
    setItems([...filteredItems]);
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
        <ListItems
          items={items}
          deleteItem={(key) => deleteItem(key)}
        ></ListItems>
      </div>
    </div>
  );
};

export default App;
