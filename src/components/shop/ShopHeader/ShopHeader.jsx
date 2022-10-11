import { motion, useCycle } from 'framer-motion';
import Responsive from '../../common/Responsive';
import { ChevronRight } from '../../icons';
import * as Styled from './styles';

const motionProps = {
  style: { overflow: 'hidden' },
  initial: false,
  variants: {
    open: {
      height: 'auto',
      display: 'block',
    },
    closed: {
      height: 0,
      transitionEnd: {
        display: 'none',
      },
    },
  },
  transition: {
    ease: 'easeInOut',
    duration: 0.6,
  },
};

export default function ShopHeader() {
  const [isTopOpen, toggleTopOpen] = useCycle(false, true);
  const [isBottomOpen, toggleBottomOpen] = useCycle(false, true);

  return (
    <>
      <Styled.TopContainer>
        <Styled.Heading>Placeholder</Styled.Heading>
        <Styled.TopButton
          type="button"
          isOpen={isTopOpen}
          aria-controls="top-text"
          aria-expanded={isTopOpen}
          onClick={toggleTopOpen}
        >
          Read More
          <ChevronRight width={20} height={27} />
        </Styled.TopButton>
      </Styled.TopContainer>
      <Responsive sx={{ display: { 0: 'none', 650: 'block' } }}>
        <Styled.Text>Placeholder</Styled.Text>
      </Responsive>
      <Responsive sx={{ display: { 0: 'block', 650: 'none' } }}>
        <motion.div
          id="top-text"
          animate={isTopOpen ? 'open' : 'closed'}
          {...motionProps}
        >
          <Styled.Text>Placeholder</Styled.Text>
        </motion.div>
      </Responsive>
      <Styled.BottomContainer>
        <Styled.SubHeading as="h2">Placeholder</Styled.SubHeading>
        <Styled.BottomButton
          type="button"
          isOpen={isBottomOpen}
          aria-controls="bottom-text"
          aria-expanded={isBottomOpen}
          onClick={toggleBottomOpen}
        >
          Read More
          <ChevronRight />
        </Styled.BottomButton>
      </Styled.BottomContainer>
      <motion.div
        id="bottom-text"
        animate={isBottomOpen ? 'open' : 'closed'}
        {...motionProps}
      >
        <Styled.Text>Placeholder</Styled.Text>
      </motion.div>
    </>
  );
}
