import Link from 'next/link';
import { useRef } from 'react';
import { useUI } from '../../../../contexts/UIContext';
import { useOnClickOutside } from '../../../../hooks';
import Dropdown from './Dropdown';
import * as Styled from './styles';

export default function NavItem({ item }) {
  const { handleOpenDropdown, handleCloseDropdown, dropdownMenu } = useUI();
  const ref = useRef(null);

  const handleClickOutside = () => {
    // Prevents handlers attached to other nav items firing and closing the
    // dropdown when clicking inside of it.
    if (dropdownMenu !== item.heading) return;

    handleCloseDropdown();
  };

  useOnClickOutside(ref, handleClickOutside);

  const handleToggleDropdown = () => {
    if (dropdownMenu === item.heading) {
      handleCloseDropdown();
    } else {
      handleOpenDropdown(item.heading);
    }
  };

  return (
    <li ref={ref}>
      {item.hasDropdown ? (
        <Styled.Link
          as="button"
          type="button"
          isOpen={dropdownMenu === item.heading}
          aria-expanded={dropdownMenu === item.heading}
          aria-controls={item.heading}
          onClick={handleToggleDropdown}
        >
          {item.heading}
        </Styled.Link>
      ) : (
        <Link href={item.href} passHref>
          <Styled.Link>{item.heading}</Styled.Link>
        </Link>
      )}
      {dropdownMenu === item.heading && <Dropdown menu={item.heading} />}
    </li>
  );
}
