import React, {Component} from 'react';
import './List.css';

export function List ({children, className}) {
  return (
    <ul className={['list'].join(className)}>
      {children}
    </ul>
  );
}