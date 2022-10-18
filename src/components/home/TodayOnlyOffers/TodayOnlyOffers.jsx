import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import offers from '../../../data/today-only-offers';
import Categories from './Categories';
import ProductCard from './ProductCard';
import * as Styled from './styles';

const MotionProductCard = motion(ProductCard);

const motionProps = {
  variants: {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  },
  transition: {
    ease: 'easeInOut',
    duration: 0.6,
  },
};

export default function TodayOnlyOffers() {
  const [displayCategory, setDisplayCategory] = useState('processors');

  const handleChangeCategory = (category = '') => {
    // Formats category heading to camel case
    const formattedCategory = category
      .toLowerCase()
      .replace(/ ./g, (str) => str[1].toUpperCase());

    setDisplayCategory(formattedCategory);
  };

  return (
    <section>
      <Categories onChangeCategory={handleChangeCategory} />
      <Styled.Container>
        <AnimatePresence initial={false} mode="wait">
          {offers[displayCategory]?.map((product) => (
            <MotionProductCard
              key={product.sku}
              product={product}
              initial="hidden"
              animate="visible"
              exit="hidden"
              {...motionProps}
            />
          ))}
        </AnimatePresence>
      </Styled.Container>
    </section>
  );
}
