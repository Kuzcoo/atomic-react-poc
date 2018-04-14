import React, {Component} from 'react';
import {Select} from '../Select/Select';
import {TextField} from '../TextField/TextField';
import {ComboBox} from '../ComboBox/ComboBox';
import './Form.css';

const fruitList = [
  {id: 0, name: 'banana'},
  {id: 1, name: 'strawberry'},
  {id: 2, name: 'apple'},
  {id: 3, name: 'cherry'}
];

const countryList = [
  {id: 0, name: 'France'},
  {id: 1, name: 'Spain'},
  {id: 2, name: 'Portugal'},
  {id: 3, name: 'England'},
  {id: 4, name: 'Iceland'},
  {id: 5, name: 'Romania'},
  {id: 6, name: 'Ireland'},
  {id: 7, name: 'Germany'},
  {id: 8, name: 'Groenland'},
  {id: 9, name: 'Denmark'}
];

export class Form extends Component {
  constructor() {
    super();

    this.state = {
      fruit: 'Choose a fruit',
      color: '',
      country: '',
      filteredCountries: countryList
    }

    this.onChooseFruit = this.onChooseFruit.bind(this);
    this.onColorChange = this.onColorChange.bind(this);
    this.onCountryChange = this.onCountryChange.bind(this);
  }

  onChooseFruit(name) {
    this.setState({
      fruit: name
    });
  }

  onColorChange(e) {
    let value = e.target.value;

    this.setState({
      color: value
    });
  }

  onCountryChange(value) {
    this.setState({
      country: value,
      filteredCountries: this.filterByValue(value)
    });
  }

  filterByValue(value) {
    return countryList.filter(country => {
      let regexp = new RegExp('^'+value.toLowerCase());
      return regexp.test(country.name.toLowerCase());
    });
  }

  render() {
    return (
      <form onSubmit={e => e.preventDefault()}>
        <TextField 
          id='color-textfield' 
          className='form__country'
          value={this.state.color}
          label='Color'
          onChange={e => this.onColorChange(e)} />
        <Select
          className='form__fruit'
          selectedValue={this.state.fruit}
          onChooseOption={this.onChooseFruit}
          options={fruitList} />

        <ComboBox 
          elementName='country-combo'
          label='Country'
          options={this.state.filteredCountries}
          value={this.state.country}
          onFilterValue={this.onCountryChange}
        />
      </form>
    );
  }
}