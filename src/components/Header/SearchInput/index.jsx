import { useState, useRef, useId, useEffect } from 'react';
import { ReactComponent as SearchIcon } from '../../../assets/svg/search.svg';
import * as Styled from './styles';

export default function SearchInput() {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef(null);
  const id = useId();

  const handleChange = (e) => setQuery(e.target.value);

  useEffect(() => {
    const element = ref.current;
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    element.addEventListener('focus', handleFocus);
    element.addEventListener('blur', handleBlur);

    return () => {
      element.removeEventListener('focus', handleFocus);
      element.removeEventListener('blur', handleBlur);
    };
  }, []);

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
        ref={ref}
        id={id}
        value={query}
        name="searchQuery"
        placeholder="Search PC-Connect.co.uk..."
        type="search"
        autoComplete="off"
        maxLength="50"
        required
        onChange={handleChange}
      />
      <Styled.Button title="Search" type="submit">
        <SearchIcon width={30} height={30} fill="white" />
      </Styled.Button>
    </Styled.Form>
  );
}
