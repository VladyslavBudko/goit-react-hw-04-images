import React, { Component } from 'react';
import { ImageGalleryList } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';
import LoadMoreBtn from 'components/Button';

class ImageGallery extends Component {
  state = {
    image: null,
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const newName = this.props.imageName;
    const MY_KEY = '30279426-ce0edf6a31bb607e668c5bb01';

    if (prevName !== newName) {
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${newName}&page=1&key=${MY_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(image => this.setState({ image }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  };

  render() {
    const { loading, image, error } = this.state;
    const { imageName } = this.props;
    return (
      <>
        <ImageGalleryList>
          {/* <!-- Набор <li> с изображениями --> */}
          {!imageName && <h2>Input image or photo name</h2>}
          {error && <h2>{imageName} list is empty. Try more!</h2>}
          {loading && <h3>Loading {imageName}</h3>}
          {image && <ImageGalleryItem imageList={image} />}
        </ImageGalleryList>
        {imageName && <LoadMoreBtn />}
      </>
    );
  }
}

export default ImageGallery;
