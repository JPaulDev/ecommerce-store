import { useState, useRef } from 'react';
import Link from 'next/link';
import useOnClickOutside from '../../../../hooks/useOnClickOutside';
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
          aria-expanded={isOpen}
          aria-controls={item.heading}
          onClick={() => setIsOpen(!isOpen)}
        >
          {item.heading}
        </Styled.Link>
      ) : (
        <Link href={item.href} passHref>
          <Styled.Link>{item.heading}</Styled.Link>
        </Link>
      )}
      {isOpen && <Dropdown menu={item.heading} />}
    </li>
  );
}
