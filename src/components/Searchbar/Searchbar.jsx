import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  // SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

import { AiOutlineSearch } from 'react-icons/ai';
// import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';

const Searchbar = () => {
  return (
    <SearchbarHeader>
      <SearchForm>
        <SearchFormButton
          type="submit"
          // onClick={}
          aria-label="Search"
        >
          <AiOutlineSearch size={24}/>
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
