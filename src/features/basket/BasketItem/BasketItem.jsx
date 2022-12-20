import Image from 'next/future/image';
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { Minus, Plus } from '../../../components/icons';
import {
  PartNumber,
  PreviousPrice,
  Price,
  StockDisplay,
} from '../../../components/product';
import { usePrice } from '../../../hooks';
import {
  decrementQuantity,
  incrementQuantity,
  removeProduct,
} from '../basketSlice';
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
    <Styled.ListItem>
      <Image
        src={product.imageUrl}
        alt=""
        width={200}
        height={200}
        quality={80}
        priority="true"
      />
      <div>
        <PartNumber fontSize={13}>{product.sku}</PartNumber>
        <Styled.ProductDescription>
          {product.name}, {product.description}
        </Styled.ProductDescription>
        <Styled.Container>
          <Price fontSize={26} fontWeight={500}>
            {price}
          </Price>
          <Styled.RemoveProduct type="button" onClick={handleRemoveProduct}>
            Remove Item
          </Styled.RemoveProduct>
        </Styled.Container>
        {product.isOnSale && (
          <PreviousPrice fontSize={15}>{previousPrice}</PreviousPrice>
        )}
        <StockDisplay stockStatus={product.stockStatus} marginTop="5px" />
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
