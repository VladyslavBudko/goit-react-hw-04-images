// import React, { Component } from 'react';
import { ImageGalleryList, InputMessageForm } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';
import ImageErrorView from 'components/ImageErrorView';
import LoaderView from 'components/Loader/Loader';
// import { toast } from 'react-toastify';


const ImageGallery = ({ images, status, imageName, error}) => {

  if (status === 'idle') {
    return <InputMessageForm>Input image or photo name</InputMessageForm>;
  }

  if (status === 'pending') {
    return <LoaderView message={`Loading ${imageName}`} />;
  }

  if (status === 'rejected') {
    return <ImageErrorView message={error.message} />;
  }

  if (images && images.length === 0) {
    // toast.error('Please try again!');
    return (
      <ImageErrorView message={`${imageName} not found. Please try again!`} />
    );
  }

  if (status === 'resolved' && images.length !== 0) {
  return (
    <>
      <ImageGalleryList>
        {images.map(image => {
          return <ImageGalleryItem imageList={image} key={image.id} />;
        })}
      </ImageGalleryList>
    </>
  );
}
}


export default ImageGallery;
