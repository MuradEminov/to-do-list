import React from 'react';
import './DoneItems.css';
import DoneListItems from './DoneListItems';

const DoneItems = (props) => {
  return (
    <div className='Done'>
      <DoneListItems />
    </div>
  );
};

export default DoneItems;
