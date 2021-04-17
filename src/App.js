import React from 'react';

const App = () => {
  return (
    <div>
      <header>
        <form id='to-do-form'>
          <input type='text' placeholder='Bitte geben den Text' />
          <button type='add'>hinzufügen</button>
        </form>
      </header>
    </div>
 
import React, { useState } from 'react';
import ListItems from './ListItems';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import DoneItems from './DoneItems';

library.add(faTrash);

export const DoneListContext = React.createContext();

const App = () => {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({ text: '', key: '' });
  const [doneItems, setDoneItems] = useState([]);

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

  const setUpdate = (text, key) => {
    const updatedItems = items;
    updatedItems.map((item) => {
      if (item.key === key) {
        item.text = text;
      }
      const arr = [];
      setItems([...arr]);
      setItems([...updatedItems]);
    });
  };

  const handleDone = (key, text) => {
    //Delete item from the list
    const filteredItems = items.filter((item) => item.key !== key);
    console.log(filteredItems);
    const arr = [];
    setItems([...arr]);
    setItems([...filteredItems]);
    //Add item to the done items list
    setDoneItems([...doneItems, text]);
    console.log('Done: ', doneItems);
  };

  return (
    <DoneListContext.Provider value={doneItems}>
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
            setUpdate={(text, key) => setUpdate(text, key)}
            handleDone={(key, text) => handleDone(key, text)}
          ></ListItems>
        </div>
        <DoneItems />
      </div>
    </DoneListContext.Provider>
 
  );
};

export default App;
