import React, {Component} from 'react';
import './TextField.css';

export function TextField({elementId, label, value, ...props}) {
  return (
    <div className={'text-field' + ' ' + props.className}>
      <input 
        {...props}
        id={elementId} 
        className={'text-field__field' + (value === '' ? '' : ' is-active')}
        type='text'
        value={value} />
      <label htmlFor={elementId} className='text-field__label'>
        {label}
      </label>
    </div>
  );
}