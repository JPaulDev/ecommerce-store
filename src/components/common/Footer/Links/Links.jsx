import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from '../../../../hooks';
import { ChevronRight } from '../../../icons';
import { ResponsiveBox } from '../../../ui';
import { DropdownButton, Title } from '../styles';

const parentVariants = {
  open: {
    height: 'auto',
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
      when: 'beforeChildren',
    },
  },
  closed: {
    height: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
      when: 'afterChildren',
    },
  },
};

const childVariants = {
  open: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      ease: 'easeInOut',
      delay: index * 0.1,
      duration: 0.2,
    },
  }),
  closed: (index) => ({
    opacity: 0,
    x: -50,
    transition: {
      ease: 'easeInOut',
      delay: 0.5 - index * 0.1,
      duration: 0.2,
    },
  }),
};

export default function Links({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const isMatch = useMediaQuery('(min-width: 900px)');

  // Open the menu if the screen is larger than 900px.
  useEffect(() => {
    isMatch ? setIsOpen(true) : setIsOpen(false);
  }, [isMatch]);

  const handleToggleOpen = () => setIsOpen(!isOpen);

  return (
    <div>
      <ResponsiveBox sx={{ display: { mobileXs: 'none', desktopXs: 'block' } }}>
        <Title>{item.title}</Title>
      </ResponsiveBox>

      <ResponsiveBox sx={{ display: { desktopXs: 'none' } }}>
        <DropdownButton
          type="button"
          isOpen={isOpen}
          aria-expanded={isOpen}
          aria-controls={item.id}
          onClick={handleToggleOpen}
        >
          {item.title}
          <ChevronRight width={15} height={20} />
        </DropdownButton>
      </ResponsiveBox>

      <AnimatePresence>
        {isOpen && (
          <List
            as={motion.ul}
            id={item.id}
            variants={parentVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {item.links.map((link, index) => (
              <motion.li
                key={link.text}
                custom={index}
                variants={childVariants}
              >
                <Link href={link.href}>
                  <a>{link.text}</a>
                </Link>
              </motion.li>
            ))}
          </List>
        )}
      </AnimatePresence>
    </div>
  );
}

const List = styled.ul`
  list-style: none;
  padding: 0 20px;

  > li {
    padding: 7px 0;
  }

  a {
    color: ${({ theme }) => theme.colors.stone[600]};
    font-size: ${({ theme }) => theme.fontSizes[13]};
    text-decoration: none;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.colors.stone[600]};
    }
  }

  @media ${({ theme }) => theme.breakpoints.tabletSm} {
    padding: 0 10px;
  }

  @media ${({ theme }) => theme.breakpoints.desktopXs} {
    padding: 0;
  }
`;
