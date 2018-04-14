import React, {Component} from 'react';
import {TextField} from '../TextField/TextField';
import {List} from '../List/List';
import {ListItem} from '../ListItem/ListItem';
import './ComboBox.css';

export function ComboBox({
    value, label, options,
    isOpen, focusIndex,
    onChange, onKeyDown, onChooseOption,
    toggleList, closeList
  }) {

  return (
    <div
      onKeyDown={onKeyDown}
      className={'combobox' + (isOpen ? ' is-open' : '')}>
      <TextField 
        elementId='color-textfield' 
        value={value}
        label={label}
        onChange={onChange} 
        onFocus={toggleList}
        onBlur={closeList} />
      <List>
        {options.map(option => (
          <ListItem 
            id={option.id} 
            name={option.name}
            shouldFocus={focusIndex === option.id}
            onMouseDown={e => onChooseOption(option.name)} />
        ))}
      </List>
    </div>
  );    
}