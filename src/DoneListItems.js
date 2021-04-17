import React, { useContext } from 'react';
import './DoneListItems.css';
import { DoneListContext } from './App';

const DoneListItems = (props) => {
  const doneList = useContext(DoneListContext);
  return doneList.map((item) => <div className='list'>{item}</div>);
};

export default DoneListItems;
