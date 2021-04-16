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
  );
};

export default App;
