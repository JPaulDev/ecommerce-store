import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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

export default function TodayOnlyOffers({ products = [] }) {
  const [category, setCategory] = useState(1);

  const handleChangeCategory = (categoryId) => setCategory(categoryId);

  const filteredProducts = products.filter(
    (product) => product.parentCategoryId === category
  );

  return (
    <section>
      <Categories onChangeCategory={handleChangeCategory} />
      <Styled.Container>
        <AnimatePresence initial={false} mode="wait">
          {filteredProducts.map((product) => (
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
