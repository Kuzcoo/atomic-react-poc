import React, {Component} from 'react';
import {TextField} from '../TextField/TextField';
import {ListItem} from '../ListItem/ListItem';
import './ComboBox.css';

export class ComboBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredOptions: this.props.options
    }

    this.filterValue = this.filterValue.bind(this);
    this.openList = this.openList.bind(this);
    this.closeList = this.closeList.bind(this);
  }

  filterValue(e) {
    this.props.onFilterValue(e.target.value);
  }

  openList() {
    this.setState({
      isOpen: true
    });
  }

  closeList() {
    this.setState({
      isOpen: false
    });
  }

  render() {
    return (
      <div className={'combobox' + (this.state.isOpen ? ' is-open' : '')}>
        <TextField 
          id='color-textfield' 
          value={this.props.value}
          label={this.props.label}
          onChange={this.filterValue} 
          onClick={this.openList}
          onBlur={this.closeList} />
        <ul className='combobox__list'>
          {this.props.options.map(option => (
            <ListItem 
              id={option.id} 
              name={option.name} 
              onClick={() => this.chooseOption(option.name)}/>
          ))}
        </ul>
      </div>
    );    
  }
}