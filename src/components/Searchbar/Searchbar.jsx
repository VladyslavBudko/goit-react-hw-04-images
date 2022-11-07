import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  // SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';

const Searchbar = () => {
  return (
    <SearchbarHeader>
      <SearchForm>
        <SearchFormButton type="submit"
          // onClick={} 
          aria-label = 'Search'>
          <DeleteIcon />
          {/* <SearchFormButtonLabel>Search</SearchFormButtonLabel> */}
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarHeader>
  );
};

export default Searchbar;
