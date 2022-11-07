import { ImageGalleryList } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem'
const ImageGallery = () => {
  return (
    <ImageGalleryList>
      {/* <!-- Набор <li> с изображениями --> */}

      <ImageGalleryItem/>
    </ImageGalleryList>
  );
};

export default ImageGallery;
