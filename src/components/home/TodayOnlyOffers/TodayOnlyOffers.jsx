import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  GraphicsCard,
  Memory,
  HardDrive,
  Processor,
  Motherboard,
} from '../../icons';
import ProductCard from './ProductCard';
import * as Styled from './styles';

const categories = [
  {
    heading: 'Graphics Cards',
    icon: <GraphicsCard width="60%" />,
    id: 4,
  },
  {
    heading: 'Memory',
    icon: <Memory width="60%" />,
    id: 2,
  },
  {
    heading: 'Storage',
    icon: <HardDrive width="60%" />,
    id: 7,
  },
  {
    heading: 'Processors',
    icon: <Processor width="60%" />,
    id: 1,
  },
  {
    heading: 'Motherboards',
    icon: <Motherboard width="60%" />,
    id: 3,
  },
];

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
  const [shopCategory, setShopCategory] = useState(1);

  const handleChangeCategory = (categoryId) => setShopCategory(categoryId);

  const filteredProducts = products.filter(
    (product) => product.parentCategoryId === shopCategory
  );

  return (
    <section>
      <Styled.Container>
        <Styled.List>
          {categories.map((category) => (
            <li key={category.id}>
              <Styled.Button
                type="button"
                onClick={() => handleChangeCategory(category.id)}
              >
                <Styled.Wrapper>{category.icon}</Styled.Wrapper>
                <Styled.Heading>{category.heading}</Styled.Heading>
              </Styled.Button>
            </li>
          ))}
        </Styled.List>
      </Styled.Container>
      <Styled.ProductList>
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
      </Styled.ProductList>
    </section>
  );
}
