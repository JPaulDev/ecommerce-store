import Image from 'next/future/image';
import { useState, forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../../features/basket/basketSlice';
import usePrice from '../../../../hooks/usePrice';
import {
  Price,
  PreviousPrice,
  PartNumber,
  QuantityDropdown,
  StockIndicator,
  AddToBasket,
} from '../../../common';
import * as Styled from './styles';

function ProductCard({ product }, ref) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const { price, previousPrice } = usePrice({
    isOnSale: product.isOnSale,
    discount: product.discount,
    price: product.price,
    currencyCode: product.currencyCode,
  });

  const handleChangeQuantity = (e) => setQuantity(parseInt(e.target.value, 10));
  const handleAddProduct = () => {
    dispatch(addProduct(product, quantity));
    setQuantity(1);
  };

  return (
    <Styled.ListItem ref={ref}>
      <Image
        src={product.imageUrl}
        width={200}
        height={200}
        alt=""
        quality={85}
      />
      <Styled.ProductName>{product.name}</Styled.ProductName>
      <Styled.ProductDescription>
        {product.description}
      </Styled.ProductDescription>
      <Styled.Wrapper>
        <PartNumber fontSize="var(--font-size-12)" sku={product.sku} />
      </Styled.Wrapper>
      <Price price={price} fontSize="var(--font-size-30)" />
      {product.isOnSale && (
        <PreviousPrice price={previousPrice} fontSize="var(--font-size-16)" />
      )}
      <QuantityDropdown
        quantity={quantity}
        isDisabled={product.stockStatus === 0}
        onChangeQuantity={handleChangeQuantity}
      />
      <StockIndicator stockStatus={product.stockStatus} marginTop="8px" />
      <AddToBasket
        isDisabled={product.stockStatus === 0}
        width="180px"
        fontSize="var(--font-size-12)"
        onAddProduct={handleAddProduct}
      />
    </Styled.ListItem>
  );
}

export default forwardRef(ProductCard);
