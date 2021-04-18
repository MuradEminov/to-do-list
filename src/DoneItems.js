import React, { useContext } from 'react';
import './DoneItems.css';
import DoneListItems from './DoneListItems';
import { DoneListContext } from './App';

const DoneItems = (props) => {
  const doneList = useContext(DoneListContext);
  return (
    <div className='Done'>
      <p id='done-items'>Einträge bereits abgehakt: {doneList.length} </p>
      <DoneListItems />
    </div>
  );
};

export default DoneItems;
