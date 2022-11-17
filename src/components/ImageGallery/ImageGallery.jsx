import { ImageGalleryList } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';

const ImageGallery = ({ images, status, imageName, error, page }) => {
  return (
    <ImageGalleryList>
      {images.map(image => {
        return (
          <ImageGalleryItem imageList={image} key={image.id} loading="lazy" />
        );
      })}
    </ImageGalleryList>
  );
};

export default ImageGallery;
