import { ImageGalleryList } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem'
import LoadMoreBtn from 'components/Button'

const ImageGallery = () => {
  return (
    <ImageGalleryList>
      {/* <!-- Набор <li> с изображениями --> */}

      <ImageGalleryItem/>
      <LoadMoreBtn/>
    </ImageGalleryList>
  );
};

export default ImageGallery;
