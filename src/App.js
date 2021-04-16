import React from 'react';
import './App.css';

const App = () => {
  return (
    <div>
      <div className='App'>
        <header>
          <form id='to-do-form'>
            <input type='text' placeholder='Bitte geben den Text' />
            <button type='add'>hinzufügen</button>
          </form>
        </header>
      </div>
    </div>
  );
};

export default App;
