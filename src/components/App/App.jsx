import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { AppContainer } from './App.styled';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Modal from 'components/Modal';

class App extends Component {
  state = {
    showModal: false,
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
        <Searchbar />
        <ImageGallery />
        {showModal && (
          <Modal>
            {/* <h1>Test Modal</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ad
              doloremque, magni voluptas harum consequuntur qui, commodi hic
              nemo blanditiis, atque perspiciatis aliquam amet ex illum eligendi
              esse magnam ipsam.
            </p> */}
          </Modal>
        )}
      </AppContainer>
    );
  }
}

export default App;
