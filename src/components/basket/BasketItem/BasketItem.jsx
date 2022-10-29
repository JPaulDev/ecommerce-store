import Image from 'next/future/image';
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import {
  decrementQuantity,
  incrementQuantity,
  removeProduct,
} from '../../../features/basket/basketSlice';
import usePrice from '../../../lib/hooks/usePrice';
import { Plus, Minus } from '../../icons';
import { PartNumber, Price, PreviousPrice, StockIndicator } from '../../common';
import * as Styled from './styles';

function BasketItem({ product }) {
  const dispatch = useDispatch();

  const { price, previousPrice } = usePrice({
    isOnSale: product.isOnSale,
    discount: product.discount * product.quantity,
    price: product.price * product.quantity,
    currencyCode: product.currencyCode,
  });

  const handleIncrementQuantity = () =>
    dispatch(incrementQuantity(product.sku));
  const handleDecrementQuantity = () =>
    dispatch(decrementQuantity(product.sku));
  const handleRemoveProduct = () => dispatch(removeProduct(product.sku));

  return (
    <Styled.ListItem as="li">
      <Image
        src={product.imageUrl}
        width={200}
        height={200}
        alt=""
        quality={85}
        priority="true"
      />
      <div>
        <PartNumber fontSize="var(--font-size-13)" sku={product.sku} />
        <Styled.ProductDescription>
          {product.name}, {product.description}
        </Styled.ProductDescription>
        <Styled.Container>
          <Price
            price={price}
            fontSize="var(--font-size-24)"
            fontWeight="var(--font-weight-medium)"
          />
          <Styled.RemoveProduct type="button" onClick={handleRemoveProduct}>
            Remove Item
          </Styled.RemoveProduct>
        </Styled.Container>
        {product.isOnSale && (
          <PreviousPrice price={previousPrice} fontSize="var(--font-size-14)" />
        )}
        <StockIndicator stockStatus={product.stockStatus} marginTop="5px" />
        <Styled.QuantitySelector>
          <Styled.DecreaseButton
            type="button"
            title="Decrease Quantity"
            aria-label="Decrease Quantity"
            onClick={handleDecrementQuantity}
          >
            <Minus width={15} height={17} />
          </Styled.DecreaseButton>
          <Styled.Quantity data-testid="quantity">
            {product.quantity}
          </Styled.Quantity>
          <Styled.IncreaseButton
            type="button"
            title="Increase Quantity"
            aria-label="Increase Quantity"
            onClick={handleIncrementQuantity}
          >
            <Plus width={15} height={17} />
          </Styled.IncreaseButton>
        </Styled.QuantitySelector>
      </div>
    </Styled.ListItem>
  );
}

export default memo(BasketItem);
