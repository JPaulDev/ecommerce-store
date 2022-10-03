import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useMediaQuery from '../../../hooks/useMediaQuery';
import offers from '../../../data/today-only-offers';
import Categories from './Categories';
import ProductCard from './ProductCard';
import * as Styled from './styles';

const MotionProductCard = motion(ProductCard);

// When changing category all transitions are disabled except for opacity
const duration = 0.5;
const variants = {
  visible: (isChangingCategory) => ({
    opacity: 1,
    flex: 1,
    margin: '0 4px',
    transition: {
      ease: 'easeInOut',
      duration,
      opacity: {
        duration,
        delay: isChangingCategory ? 0 : duration,
      },
    },
  }),
  hidden: (isChangingCategory) => ({
    opacity: 0,
    flex: isChangingCategory ? 1 : 0,
    margin: isChangingCategory ? '0 4px' : 0,
    transition: {
      ease: 'easeInOut',
      duration,
      flex: {
        duration,
        delay: isChangingCategory ? 0 : duration,
      },
      margin: {
        duration,
        delay: isChangingCategory ? 0 : duration,
      },
    },
  }),
};

export default function TodayOnlyOffers() {
  const [displayCategory, setDisplayCategory] = useState('processors');
  const [productsPerRow, setProductsPerRow] = useState(2);
  const isMatch845 = useMediaQuery('(min-width: 845px)');
  const isMatch1120 = useMediaQuery('(min-width: 1120px)');
  const isChangingCategory = useRef(false);

  const handleChangeCategory = (category = '') => {
    // Formats category heading to camel case
    const formattedCategory = category
      .toLowerCase()
      .replace(/ ./g, (str) => str[1].toUpperCase());

    setDisplayCategory(formattedCategory);
    isChangingCategory.current = true;

    // Called after changing category animation has completed
    setTimeout(() => {
      isChangingCategory.current = false;
    }, 1000);
  };

  useEffect(() => {
    if (isMatch1120) {
      setProductsPerRow(4);
    } else if (isMatch845) {
      setProductsPerRow(3);
    } else {
      setProductsPerRow(2);
    }
  }, [isMatch845, isMatch1120]);

  return (
    <section>
      <Categories onChangeCategory={handleChangeCategory} />
      {offers[displayCategory]?.map((row, index) => (
        <Styled.Container key={index} data-testid={displayCategory}>
          <AnimatePresence
            custom={isChangingCategory.current}
            mode={isChangingCategory.current ? 'wait' : 'sync'}
          >
            {row.map((product, productIndex) => {
              if (productIndex < productsPerRow) {
                return (
                  <MotionProductCard
                    key={product.sku}
                    custom={isChangingCategory.current}
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    product={product}
                  />
                );
              }
              return undefined;
            })}
          </AnimatePresence>
        </Styled.Container>
      ))}
    </section>
  );
}
