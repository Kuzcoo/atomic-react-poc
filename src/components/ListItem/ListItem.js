import React, {Component} from 'react';
import './ListItem.css';

export function ListItem({itemId, name, shouldFocus, ...props}) {
  return (
    <li
      className={'list-item' + (shouldFocus ? ' is-focus' : '')}
      id={itemId} {...props}>
      {name}
    </li>
  );
}