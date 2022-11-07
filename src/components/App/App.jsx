// import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { AppDiv } from './App.styled';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery'

const App = () => {
  return (
    <AppDiv>
      <Searchbar />
      <ImageGallery/>
    </AppDiv>
  );
};

export default App;
