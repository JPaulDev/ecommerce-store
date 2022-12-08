import { useState } from 'react';
import { LabelledInput } from '../../../ui';
import { Search } from '../../../icons';
import * as Styled from './styles';

export default function SearchInput() {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleChangeSearchQuery = (e) => setQuery(e.target.value);

  const handleChangeFocus = () => setIsFocused(!isFocused);

  return (
    <Styled.Form
      role="search"
      action="/search"
      method="get"
      isFocused={isFocused}
    >
      <LabelledInput
        label="Search:"
        styles={Styled.inputStyles}
        name="searchQuery"
        type="search"
        placeholder="Search PC-Connect.co.uk..."
        maxLength="50"
        required
        aria-required
        onChange={handleChangeSearchQuery}
        onFocus={handleChangeFocus}
        onBlur={handleChangeFocus}
        value={query}
      />
      <Styled.Button title="Search" aria-label="Search" type="submit">
        <Search width={30} height={30} />
      </Styled.Button>
    </Styled.Form>
  );
}
