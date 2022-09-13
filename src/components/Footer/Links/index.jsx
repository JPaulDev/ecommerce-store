import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useMediaQuery from '../../../hooks/useMediaQuery';
import MaterialIcon from '../../MaterialIcon';
import { Heading, DropdownButton } from '../styles';
import * as Styled from './styles';

const MotionList = motion(Styled.List);

const parentVariants = {
  closed: {
    height: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
      when: 'afterChildren',
    },
  },
  open: {
    height: 'auto',
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
      when: 'beforeChildren',
    },
  },
};

const childVariants = {
  closed: (index) => ({
    opacity: 0,
    x: -50,
    transition: {
      ease: 'easeInOut',
      delay: 0.5 - index * 0.1,
      duration: 0.2,
    },
  }),
  open: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      ease: 'easeInOut',
      delay: index * 0.1,
      duration: 0.2,
    },
  }),
};

export default function Links({ item }) {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 860);
  const isMatch = useMediaQuery('(min-width: 860px)');

  const handleOpen = () => setIsOpen(!isOpen);

  // Prevents the menu being stuck closed when resizing from a smaller window width
  useEffect(() => {
    isMatch ? setIsOpen(true) : setIsOpen(false);
  }, [isMatch]);

  return (
    <div>
      {isMatch ? (
        <Heading>{item.heading}</Heading>
      ) : (
        <DropdownButton
          type="button"
          isOpen={isOpen}
          aria-expanded={isOpen}
          aria-controls={item.heading}
          onClick={handleOpen}
        >
          {item.heading}
          <MaterialIcon iconSize="30px">chevron_right</MaterialIcon>
        </DropdownButton>
      )}
      <AnimatePresence initial={false}>
        {isOpen && (
          <MotionList
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
                <Styled.Link href={link.url}>{link.text}</Styled.Link>
              </motion.li>
            ))}
          </MotionList>
        )}
      </AnimatePresence>
    </div>
  );
}
