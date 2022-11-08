import errorImage from './error.jpg';
import {ImageErrorForm} from './ImgeErrorView.styled'

export default function ImageErrorView({ message }) {
  return (
    <ImageErrorForm>
      <img src={errorImage} width="240" alt="" />
      <h2>{message}</h2>
    </ImageErrorForm>
  );
}
