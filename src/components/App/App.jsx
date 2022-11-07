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
    // loading: false,
    showModal: false,
  };

  // componentDidMount() {
  //   this.setState({ loading: true });
  // const MY_KEY = '30279426-ce0edf6a31bb607e668c5bb01';

  //   fetch(
  //     `https://pixabay.com/api/?q=cat&page=1&key=${MY_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  //   )
  //     .then(res => res.json())
  //     .then(image => this.setState({ image }))
  //     .finally(() => this.setState({ loading: false }));
  //   console.log(this.state);
  // }
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
        <ToastContainer autoClose={3000}/>
        <Searchbar onSubmit={this.handleSearchBarSubmit} />
        <ImageGallery />
        {/* {loading && <h1>Loading Image Gallery</h1> } */}
        {/* {image && (
         
        )} */}

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
