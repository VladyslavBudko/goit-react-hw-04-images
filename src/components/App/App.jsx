import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { AppContainer } from './App.styled';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    imageName: '',
  };

  handleSearchBarSubmit = imageName => {
    this.setState({ imageName });
  };

  render() {
    return (
      <AppContainer>
        <Searchbar onSubmit={this.handleSearchBarSubmit} />
        <ImageGallery imageName={this.state.imageName} imagesApp={this.state.images} />
        <ToastContainer autoClose={3000} />
      </AppContainer>
    );
  }
}

export default App;
