import { useState, useRef } from 'react';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import Dropdown from './Dropdown';
import * as Styled from './styles';

export default function NavItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const handleClose = () => setIsOpen(false);
  useOnClickOutside(ref, handleClose);

  return (
    <li ref={ref}>
      {item.hasDropdown ? (
        <Styled.Link
          as="button"
          type="button"
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          {item.title}
        </Styled.Link>
      ) : (
        <Styled.Link href={item.url}>{item.title}</Styled.Link>
      )}
      {isOpen && <Dropdown menu={item.title} />}
    </li>
  );
}
