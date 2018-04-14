import React, {Component} from 'react';
import './Label.css';

export function Label({elementId, value, className}) {
  return (
    <label 
      htmlFor={elementId} 
      className={['label', className].join(' ')}>
      {value}
    </label>
  );
}