import React, {Component} from 'react';
import './ListItem.css';

export function ListItem({itemId, name, ...props}) {
  return (
    <li
      className='list-item'
      id={itemId} {...props}>
      {name}
    </li>
  );
}