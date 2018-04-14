import React, {Component} from 'react';
import {ListItem} from '../ListItem/ListItem';
import './Select.css';

export class Select extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggleSelect = this.toggleSelect.bind(this);
    this.chooseOption = this.chooseOption.bind(this);
  }

  toggleSelect() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  chooseOption(name) {
    this.props.onChooseOption(name);
    this.closeSelect();
  }

  closeSelect() {
    this.setState({
      isOpen: false
    });
  }

  render() {
    return (
      <div className={'select' + ' ' + this.props.className + (this.state.isOpen ? ' is-open' : '')}>
        <button 
          className='select__toggle'
          onClick={this.toggleSelect} >
          {this.props.selectedValue}
        </button>
        <ul className={'select__list'}>
          {this.props.options.map(option => (
            <ListItem 
              id={option.id} 
              name={option.name} 
              onClick={() => this.chooseOption(option.name)}/>
          ))}
        </ul>
        <svg className='select__arrow' width='10' height='5' viewBox='0 0 10 5'>
          <path d='M0,0l10,0l-5,5l-5,-5z' fill='#aaa' />
        </svg>
      </div>
    );    
  }
}