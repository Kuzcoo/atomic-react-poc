import React, {Component} from 'react';
import {Label} from '../Label/Label';
import {List} from '../List/List';
import {ListItem} from '../ListItem/ListItem';
import './Select.css';

export function Select({
  className, label, selectedValue, options, isOpen,
  onKeyDown, onChooseOption, toggleList, focusIndex,
  closeList
}) {

  return (
    <div 
      onKeyDown={onKeyDown}
      className={'select' + ' ' + className + (isOpen ? ' is-open' : '')}>
      <Label value={label}  className='is-active' />
      <button 
        className='select__toggle'
        onMouseDown={toggleList} >
        {selectedValue}
      </button>
      <List>
        {options.map(option => (
          <ListItem 
            id={option.id} 
            name={option.name}
            shouldFocus={focusIndex === option.id}
            onMouseDown={() => {onChooseOption(option.name); closeList()}} />
        ))}
      </List>
      <svg className='select__arrow' width='10' height='5' viewBox='0 0 10 5'>
        <path d='M0,0l10,0l-5,5l-5,-5z' fill='#aaa' />
      </svg>
    </div>
  );    
}