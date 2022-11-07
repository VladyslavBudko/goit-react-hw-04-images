import React, { Component } from 'react';
import { toast } from 'react-toastify';

import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

import { AiOutlineSearch } from 'react-icons/ai';
class Searchbar extends Component {
  state = {
    inputData: '',
  };

  handleInputDataChange = e => {
    this.setState({ inputData: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.inputData.trim() === '') {
      toast.error('Input image or photo name');
      return;
    }
    this.props.onSubmit(this.state.inputData);
  };

  render() {
    return (
      <SearchbarHeader>
        <SearchForm>
          <SearchFormButton
            type="submit"
            onClick={this.handleSubmit}
            aria-label="Search"
          >
            <AiOutlineSearch size={24} />
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.inputData}
            onChange={this.handleInputDataChange}
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}

export default Searchbar;
