import { useState, useId } from 'react';
import { Search } from '../../../icons';
import * as Styled from './styles';

export default function SearchInput() {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const id = useId();

  const handleChangeSearchQuery = (e) => setQuery(e.target.value);
  const handleChangeFocus = () => setIsFocused(!isFocused);

  return (
    <Styled.Form
      role="search"
      action="/search"
      method="get"
      isFocused={isFocused}
    >
      <label htmlFor={id} hidden>
        Search
      </label>
      <Styled.Input
        id={id}
        value={query}
        name="searchQuery"
        placeholder="Search PC-Connect.co.uk..."
        type="search"
        autoComplete="off"
        maxLength="50"
        required
        onChange={handleChangeSearchQuery}
        onFocus={handleChangeFocus}
        onBlur={handleChangeFocus}
      />
      <Styled.Button title="Search" aria-label="Search" type="submit">
        <Search width={30} height={30} />
      </Styled.Button>
    </Styled.Form>
  );
}
