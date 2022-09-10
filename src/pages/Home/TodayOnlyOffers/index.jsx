import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useMediaQuery from '../../../hooks/useMediaQuery';
import offers from '../../../data/today-only-offers';
import Categories from './Categories';
import ProductCard from './ProductCard';
import * as Styled from './styles';

const MotionProductCard = motion(ProductCard);

function setInitialProducts() {
  let productsPerRow = 2;

  if (window.innerWidth >= 1120) {
    productsPerRow = 4;
  } else if (window.innerWidth >= 845) {
    productsPerRow = 3;
  }

  return productsPerRow;
}

// When changing category disables all other transitions except for opacity
const duration = 0.5;
const variants = {
  enter: (isChangingCategory) => ({
    opacity: 0,
    flex: isChangingCategory ? 1 : 0,
    margin: isChangingCategory ? '0 4px' : 0,
  }),
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
  exit: (isChangingCategory) => ({
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
  const [productsPerRow, setProductsPerRow] = useState(setInitialProducts);
  const isMatch845 = useMediaQuery('(min-width: 845px)');
  const isMatch1120 = useMediaQuery('(min-width: 1120px)');
  const isChangingCategory = useRef(false);

  const handleChangeCategory = (category) => {
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
            initial={false}
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
                    initial="enter"
                    animate="visible"
                    exit="exit"
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
