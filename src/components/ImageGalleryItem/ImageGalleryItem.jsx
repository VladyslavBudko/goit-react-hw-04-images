import {
  ImageGalleryItemLi,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ imageList }) => {
  console.log(imageList);
  return imageList.map(({ id, webformatURL, largeImageUR, tags }) => {
    return (
      <ImageGalleryItemLi key={id}>
        <ImageGalleryItemImage src={webformatURL} alt={tags} />
      </ImageGalleryItemLi>
    );
  });
};

export default ImageGalleryItem;
