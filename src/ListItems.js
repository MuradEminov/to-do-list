import React from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

const ListItems = (props) => {
  const items = props.items;
  const listItems = items.map((item) => {
    return (
      <div className='list' key={item.key}>
        <p>
          <input
            type='text'
            id={item.key}
            value={item.text}
            onChange={(e) => {
              props.setUpdate(e.target.value, item.key);
            }}
          />
          <span>
            <button
              className='ready-button'
              onClick={() => props.handleDone(item.key, item.text)}
            >
              fertig
            </button>
          </span>
          <span>
            <FontAwesomeIcon
              className='faicon'
              icon='trash'
              onClick={() => props.deleteItem(item.key)}
            />
          </span>
        </p>
      </div>
    );
  });

  return (
    <div>
      <FlipMove duration={500} easing='ease-in-out'>
        {listItems}
      </FlipMove>
    </div>
  );
};

export default ListItems;
