import Modal from 'components/Modal';
import React, { Component } from 'react';
import {
  ImageGalleryItemLi,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props.imageList;
    const { showModal } = this.state;

    return (
      <>
        <ImageGalleryItemLi  onClick={this.toggleModal}>
          <ImageGalleryItemImage src={webformatURL} alt={tags} />
        </ImageGalleryItemLi>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={tags} loading="lazy" />
          </Modal>
        )}
      </>
    );
    // });
  }
}

export default ImageGalleryItem;
