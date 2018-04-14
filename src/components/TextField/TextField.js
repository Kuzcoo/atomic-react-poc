import React, {Component} from 'react';
import {Label} from '../Label/Label';
import './TextField.css';

export function TextField({
  elementId, 
  className,
  label, value,
  onChange,
  ...props
}) {
  return (
    <div className={['text-field', className].join(' ')}>
      <input 
        id={elementId} 
        className={'text-field__field' + (value === '' ? '' : ' is-active')}
        type='text'
        value={value} 
        onChange={onChange} 
        {...props} />
      <Label 
        elementId={elementId} 
        value={label} 
        className={value === '' ? '' : 'is-active'}/>
    </div>
  );
}