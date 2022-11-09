// import React, { Component } from 'react';
import { ImageGalleryList, InputMessageForm } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';
import ImageErrorView from 'components/ImageErrorView';
import LoaderView from 'components/Loader/Loader';


const ImageGallery = ({ images, status, imageName, error, page}) => {

  if (status === 'idle') {
    return <InputMessageForm>Input image or photo name</InputMessageForm>;
  }

  if (status === 'pending' && page === 1) {
    return <LoaderView message={`Loading ${imageName}`} />;
  }

  if (status === 'rejected') {
    return <ImageErrorView message={error.message} />;
  }

  if (images && images.length === 0) {
    return (
      <ImageErrorView message={`${imageName} not found. Please try again!`} />
    );
  }

  // if (status === 'resolved' && images.length !== 0) {
    // }
  return (
      <ImageGalleryList>
        {images.map(image => {
          return <ImageGalleryItem imageList={image} key={image.id} loading="lazy" />;
        })}
      </ImageGalleryList>
  );
}


export default ImageGallery;
