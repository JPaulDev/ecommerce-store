import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import styled from 'styled-components';
import { useUI } from '../../../../contexts/UIContext';
import { useOnClickOutside } from '../../../../hooks';
import DropdownMenu from '../DropdownMenu';

const TRANSITION_TIME = 0.2;

const MotionDropdownMenu = motion(DropdownMenu);

const motionProps = {
  variants: {
    enter: {
      opacity: 1,
      y: 0,
      x: '-50%',
    },
    exit: {
      opacity: 0,
      y: 4,
      x: '-50%',
    },
  },
  transition: {
    ease: 'easeIn',
    duration: TRANSITION_TIME,
  },
};

export default function NavItem({ item }) {
  const { handleOpenDropdown, handleCloseDropdown, dropdownMenu } = useUI();
  const ref = useRef(null);

  const handleClickOutside = () => {
    // Prevents handlers attached to other nav items firing and closing the
    // dropdown when clicking inside of it.
    if (dropdownMenu !== item.title) return;
    handleCloseDropdown();
  };

  useOnClickOutside(ref, handleClickOutside);

  const handleToggleDropdown = () => {
    if (dropdownMenu === item.title) {
      handleCloseDropdown();
    } else {
      handleOpenDropdown(item.title);
    }
  };

  return (
    <li ref={ref}>
      {item.href ? (
        <Link href={item.href} passHref>
          <StyledLink>{item.title}</StyledLink>
        </Link>
      ) : (
        <StyledLink
          as="button"
          type="button"
          isOpen={dropdownMenu === item.title}
          aria-expanded={dropdownMenu === item.title}
          aria-controls={item.id}
          onClick={handleToggleDropdown}
        >
          {item.title}
        </StyledLink>
      )}

      <AnimatePresence mode="wait">
        {dropdownMenu === item.title && (
          <MotionDropdownMenu
            menu={item.title}
            id={item.id}
            initial="exit"
            animate="enter"
            exit="exit"
            {...motionProps}
          />
        )}
      </AnimatePresence>
    </li>
  );
}

const StyledLink = styled.a`
  color: ${({ theme, isOpen }) => (isOpen ? theme.colors.stone[600] : 'white')};
  cursor: pointer;
  display: block;
  font-size: ${({ theme }) => theme.fontSizes[14]};
  padding: 15px 20px;
  text-decoration: none;
  transition: all ${TRANSITION_TIME}s ease-in-out;
  z-index: 10;
  position: relative;

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[600]};
  }

  && {
    background-color: ${({ isOpen }) => isOpen && 'white'};
  }
`;
