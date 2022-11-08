import errorImage from './error.jpg';

export default function ImageErrorView({ message }) {
  return (
    <div>
      <img src={errorImage} width="240" alt="" />
      <p>{message}</p>
    </div>
  );
}
