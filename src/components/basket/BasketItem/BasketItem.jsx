import Image from 'next/future/image';
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import {
  decrementQuantity,
  incrementQuantity,
  removeProduct,
} from '../../../features/basket/basketSlice';
import usePrice from '../../../hooks/usePrice';
import { Plus, Minus } from '../../icons';
import { PartNumber, Price, PreviousPrice, StockIndicator } from '../../common';
import * as Styled from './styles';

function BasketItem({ product = {} }) {
  const { price, salePrice } = usePrice({
    price: product.price * product.quantity,
    salePrice: product.salePrice * product.quantity,
  });
  const dispatch = useDispatch();

  const handleIncrementQuantity = () =>
    dispatch(incrementQuantity(product.sku));
  const handleDecrementQuantity = () =>
    dispatch(decrementQuantity(product.sku));
  const handleRemoveProduct = () => dispatch(removeProduct(product.sku));

  return (
    <Styled.ListItem>
      <Image src={product.image} alt="" quality={85} />
      <div>
        <PartNumber fontSize="0.8rem" sku={product.sku} />
        <Styled.ProductDescription>
          {product.name}, {product.description?.join(', ')}
        </Styled.ProductDescription>
        <Styled.Container>
          <Price
            price={salePrice || price}
            fontSize="1.45rem"
            fontWeight={500}
          />
          <Styled.RemoveProduct type="button" onClick={handleRemoveProduct}>
            Remove Item
          </Styled.RemoveProduct>
        </Styled.Container>
        {salePrice && <PreviousPrice price={price} fontSize="0.9rem" />}
        <StockIndicator stock={product.stock} marginTop="5px" />
        <Styled.QuantitySelector>
          <Styled.DecreaseButton
            type="button"
            aria-label="Decrease Quantity"
            onClick={handleDecrementQuantity}
          >
            <Minus width={14} height={16} />
          </Styled.DecreaseButton>
          <Styled.Quantity>{product.quantity}</Styled.Quantity>
          <Styled.IncreaseButton
            type="button"
            aria-label="Increase Quantity"
            onClick={handleIncrementQuantity}
          >
            <Plus width={14} height={16} />
          </Styled.IncreaseButton>
        </Styled.QuantitySelector>
      </div>
    </Styled.ListItem>
  );
}

export default memo(BasketItem);
