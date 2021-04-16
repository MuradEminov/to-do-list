import React from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ListItems = (props) => {
  const items = props.items;
  const listItems = items.map((item) => {
    return (
      <div className='list' key='item.key'>
        <p>
          {item.text}
          <span>
            <FontAwesomeIcon className='faicon' icon='trash' />
          </span>
        </p>
      </div>
    );
  });

  return <div>{listItems}</div>;
};

export default ListItems;
