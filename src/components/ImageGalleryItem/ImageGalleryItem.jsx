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
    const { id, webformatURL, largeImageURL, tags } = this.props.imageList;
    const { showModal } = this.state;

    // console.log(imageList);
    // return imageList.map(({ id, webformatURL, largeImageURL, tags }) => {
    return (
      <>
        <ImageGalleryItemLi key={id} onClick={this.toggleModal}>
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
