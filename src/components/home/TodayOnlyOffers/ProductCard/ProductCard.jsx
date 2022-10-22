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
    <Styled.Container ref={ref}>
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
        <PartNumber fontSize="0.75rem" sku={product.sku} />
      </Styled.Wrapper>
      <Price price={price} fontSize="1.9rem" />
      {product.isOnSale && (
        <PreviousPrice price={previousPrice} fontSize="0.93rem" />
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
        fontSize="0.75rem"
        onAddProduct={handleAddProduct}
      />
    </Styled.Container>
  );
}

export default forwardRef(ProductCard);
