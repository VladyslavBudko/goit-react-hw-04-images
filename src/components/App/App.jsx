import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import fetchImages from 'components/api';

import LoadMoreBtn from 'components/Button';
import { AppContainer } from './App.styled';

class App extends Component {
  state = {
    imageName: '',
    images: [],
    error: null,
    status: 'idle',
    page: 1,
    total: 0,
  };

 async componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.imageName;
    const newName = this.state.imageName;

    const prevPage = prevState.page;
    const newPage = this.state.page;

    if (prevName !== newName || prevPage !== newPage) {
      this.setState({ status: 'pending' });

      try {
        const images = await fetchImages(newName, newPage);
        this.setState(prevState => ({
          images: [...prevState.images, ...images.hits],
          total: images.total,
          status: 'resolved',
        }));
      } catch (error) {
        this.setState({ error, status: 'rejected' });
      }
    }
  }

  handleSearchBarSubmit = imageName => {
    this.setState({ imageName, images: [], page: 1, total: 0 });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, error, status, total, page } = this.state;

    return (
      <AppContainer>
        <Searchbar onSubmit={this.handleSearchBarSubmit} />
        <ImageGallery
          images={images}
          status={status}
          imageName={this.state.imageName}
          error={error}
          page={page}
        />
        {images.length < total && <LoadMoreBtn onClick={this.loadMore} />}

        <ToastContainer autoClose={3000} />
      </AppContainer>
    );
  }
}

export default App;
