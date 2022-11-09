import PropTypes from 'prop-types';
import {LoadMoreButton} from './Button.styled'

const LoadMoreBtn = ({onClick}) => {
  return <LoadMoreButton type="button" onClick={onClick}>Load more</LoadMoreButton>;
};

export default LoadMoreBtn;


LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
