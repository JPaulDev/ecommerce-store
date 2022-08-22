import React from 'react';
import { ReactComponent as SearchIcon } from '../../../assets/svg/search.svg';
import * as Styled from './styles';

export default function SearchInput() {
  const [query, setQuery] = React.useState('');
  const id = React.useId();

  const handleChange = (e) => setQuery(e.target.value);

  return (
    <Styled.Form action="/search" method="get">
      <label htmlFor={id} hidden>
        Search
      </label>
      <Styled.Input
        id={id}
        value={query}
        name="searchQuery"
        placeholder="Search PC-Connect.co.uk..."
        type="text"
        autoComplete="off"
        maxLength="50"
        required
        onChange={handleChange}
      />
      <Styled.Button title="Search" type="submit">
        <SearchIcon width="30px" height="30px" fill="white" />
      </Styled.Button>
    </Styled.Form>
  );
}
