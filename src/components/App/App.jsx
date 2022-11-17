import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import fetchImages from 'components/api';
import ImageErrorView from 'components/ImageErrorView';
import LoaderView from 'components/Loader/Loader';

import LoadMoreBtn from 'components/Button';
import { AppContainer, InputMessageForm } from './App.styled';

const App = () => {
  const [queryImageName, setQueryImageName] = useState('');
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!queryImageName) return;

    async function getImageName() {
      setStatus('pending');

      try {
        const images = await fetchImages(queryImageName, page);
        setImages(prevState => [...prevState, ...images.hits]);
        setTotal(images.total);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        setError(error);
      }
    }

    getImageName();
  }, [page, queryImageName]);

  const handleSearchBarSubmit = queryImageName => {
    setQueryImageName(queryImageName);
    setImages([]);
    setPage(1);
    setTotal(0);
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const Gallery = () => {
    if (status === 'idle') {
      return <InputMessageForm>Input image or photo name</InputMessageForm>;
    }

    if (status === 'pending' && page === 1) {
      return <LoaderView message={`Loading ${queryImageName}`} />;
    }

    if (status === 'rejected') {
      return <ImageErrorView message={error.message} />;
    }

    if (images && images.length === 0) {
      return (
        <ImageErrorView
          message={`${queryImageName} not found. Please try again!`}
        />
      );
    }
  };

  return (
    <AppContainer>
      <Searchbar onSubmit={handleSearchBarSubmit} />
      <Gallery />
      <ImageGallery images={images} />
      {images.length < total && <LoadMoreBtn onClick={loadMore} />}

      <ToastContainer autoClose={3000} />
    </AppContainer>
  );
};

export default App;

// class App extends Component {
//   state = {
//     imageName: '',
//     images: [],
//     error: null,
//     status: 'idle',
//     page: 1,
//     total: 0,
//   };

//  async componentDidUpdate(prevProps, prevState) {
//     const prevName = prevState.imageName;
//     const newName = this.state.imageName;

//     const prevPage = prevState.page;
//     const newPage = this.state.page;

//     if (prevName !== newName || prevPage !== newPage) {
//       this.setState({ status: 'pending' });

//       try {
//         const images = await fetchImages(newName, newPage);
//         this.setState(prevState => ({
//           images: [...prevState.images, ...images.hits],
//           total: images.total,
//           status: 'resolved',
//         }));
//       } catch (error) {
//         this.setState({ error, status: 'rejected' });
//       }
//     }
//   }

//   handleSearchBarSubmit = imageName => {
//     this.setState({ imageName, images: [], page: 1, total: 0 });
//   };

//   loadMore = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//   };

//   render() {
//     const { images, error, status, total, page } = this.state;

//     return (
//       <AppContainer>
//         <Searchbar onSubmit={this.handleSearchBarSubmit} />
//         <ImageGallery
//           images={images}
//           status={status}
//           imageName={this.state.imageName}
//           error={error}
//           page={page}
//         />
//         {images.length < total && <LoadMoreBtn onClick={this.loadMore} />}

//         <ToastContainer autoClose={3000} />
//       </AppContainer>
//     );
//   }
// }

// export default App;
