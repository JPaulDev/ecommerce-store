import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useMediaQuery from '../../../../lib/hooks/useMediaQuery';
import { ChevronRight } from '../../../icons';
import { Heading, DropdownButton } from '../styles';
import * as Styled from './styles';

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
  const isMatch = useMediaQuery('(min-width: 860px)');

  const handleOpen = () => setIsOpen(!isOpen);

  // Prevents the menu being stuck closed when resizing from a smaller window
  // width.
  useEffect(() => {
    isMatch ? setIsOpen(true) : setIsOpen(false);
  }, [isMatch]);

  return (
    <div>
      {isMatch ? (
        <Heading>{item.heading}</Heading>
      ) : (
        <DropdownButton
          as="button"
          type="button"
          isOpen={isOpen}
          aria-expanded={isOpen}
          aria-controls={item.heading}
          onClick={handleOpen}
        >
          {item.heading}
          <ChevronRight width={15} height={20} />
        </DropdownButton>
      )}
      <AnimatePresence>
        {isOpen && (
          <Styled.List
            as={motion.ul}
            id={item.heading}
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
                <Link href={link.href} passHref>
                  <Styled.Link>{link.text}</Styled.Link>
                </Link>
              </motion.li>
            ))}
          </Styled.List>
        )}
      </AnimatePresence>
    </div>
  );
}
