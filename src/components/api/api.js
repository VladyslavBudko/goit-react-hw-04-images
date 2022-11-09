import axios from 'axios';
const MY_KEY = '30279426-ce0edf6a31bb607e668c5bb01';

const fetchImages = async (newName, newPage) => {
  console.log(newName);
  console.log(newPage);
  const response = await axios.get(
    `https://pixabay.com/api/?q=${newName}&key=${MY_KEY}&image_type=photo&orientation=horizontal&per_page=12&page=${newPage}`
  );

  console.log(response);

  if (response.data.total === 0) {
    return Promise.reject(new Error(`${newName} not found. Try again!`));
  } else {
    const total = response.data.total;
    const hits = response.data.hits;
    return { total, hits };
  }
};

export default fetchImages;
