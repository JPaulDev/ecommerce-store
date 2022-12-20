import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import backgroundImg from '../../../../public/images/today-only-banner/gaming-pc.webp';
import { ProductCard } from '../../../features/basket';
import {
  GraphicsCard,
  HardDrive,
  Memory,
  Motherboard,
  Processor,
} from '../../icons';
import { LinkButton, LinkChevron, ResponsiveBox } from '../../ui';
import * as Styled from './styles';

const CATEGORIES = [
  {
    id: 4,
    title: 'Graphics Cards',
    icon: <GraphicsCard width="60%" />,
  },
  {
    id: 2,
    title: 'Memory',
    icon: <Memory width="60%" />,
  },
  {
    id: 7,
    title: 'Storage',
    icon: <HardDrive width="60%" />,
  },
  {
    id: 1,
    title: 'Processors',
    icon: <Processor width="60%" />,
  },
  {
    id: 3,
    title: 'Motherboards',
    icon: <Motherboard width="60%" />,
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
  const linkText = 'View All Offers';

  const handleChangeCategory = (categoryId) => setShopCategory(categoryId);

  const filteredProducts = products.filter(
    (product) => product.parentCategoryId === shopCategory
  );

  return (
    <Styled.Section>
      <Styled.Banner background={backgroundImg.src}>
        <Styled.RedOval />
        <Styled.Heading>
          TODAY ONLY
          <span>Fantastic offers, updated every weekday</span>
        </Styled.Heading>
        <ResponsiveBox
          sx={{ display: { mobileXs: 'none', desktopXs: 'block' } }}
        >
          <LinkChevron href="/" fontSize={13} iconSize={20}>
            {linkText}
          </LinkChevron>
        </ResponsiveBox>
        <ResponsiveBox
          sx={{ display: { mobileXs: 'block', desktopXs: 'none' } }}
        >
          <LinkButton href="/" color="white">
            {linkText}
          </LinkButton>
        </ResponsiveBox>
      </Styled.Banner>

      <Styled.Categories>
        <ul>
          {CATEGORIES.map((category) => (
            <li key={category.id}>
              <Styled.Button
                type="button"
                onClick={() => handleChangeCategory(category.id)}
              >
                <Styled.Wrapper>{category.icon}</Styled.Wrapper>
                <Styled.Category>{category.title}</Styled.Category>
              </Styled.Button>
            </li>
          ))}
        </ul>
      </Styled.Categories>

      <Styled.ProductList>
        <AnimatePresence initial={false} mode="wait">
          {filteredProducts.map((product) => (
            <MotionProductCard
              key={product.sku}
              variant="vertical"
              product={product}
              initial="hidden"
              animate="visible"
              exit="hidden"
              {...motionProps}
            />
          ))}
        </AnimatePresence>
      </Styled.ProductList>
    </Styled.Section>
  );
}
