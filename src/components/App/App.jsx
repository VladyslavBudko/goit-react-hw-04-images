import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { AppContainer } from './App.styled';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Modal from 'components/Modal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    imageName: '',
    showModal: false,
  };

  handleSearchBarSubmit = imageName => {
    this.setState({ imageName });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <AppContainer>
        <Searchbar onSubmit={this.handleSearchBarSubmit} />
        <ImageGallery imageName={this.state.imageName} />
        <ToastContainer autoClose={3000} />

        <button type="button" onClick={this.toggleModal}>
          Modal open
        </button>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Test Modal</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ad
              doloremque, magni voluptas harum consequuntur qui, commodi hic
              nemo blanditiis, atque perspiciatis aliquam amet ex illum eligendi
              esse magnam ipsam.
            </p>
          </Modal>
        )}
      </AppContainer>
    );
  }
}

export default App;
