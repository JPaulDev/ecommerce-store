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

function ProductCard({ product = {} }, ref) {
  const [quantity, setQuantity] = useState(1);
  const { price, salePrice } = usePrice(product);
  const dispatch = useDispatch();
  const isOutOfStock = product.stock <= 0;

  const handleChangeQuantity = (e) => setQuantity(parseInt(e.target.value, 10));
  const handleAddProduct = () => {
    dispatch(addProduct(product, quantity));
    setQuantity(1);
  };

  return (
    <Styled.Wrapper ref={ref} data-testid="product">
      <Styled.Container>
        <Styled.ImageWrapper>
          <Image src={product.image} alt="" quality={85} />
        </Styled.ImageWrapper>
        <Styled.ProductName>{product.name}</Styled.ProductName>
        <Styled.ProductDescription>
          {product.description?.join(', ')}
        </Styled.ProductDescription>
        <Styled.PartNumberWrapper>
          <PartNumber fontSize="0.75rem" sku={product.sku} />
        </Styled.PartNumberWrapper>
        <Price price={salePrice || price} fontSize="1.9rem" />
        {salePrice && <PreviousPrice price={price} fontSize="0.93rem" />}
        <QuantityDropdown
          quantity={quantity}
          isDisabled={isOutOfStock}
          onChangeQuantity={handleChangeQuantity}
        />
        <StockIndicator stock={product.stock} marginTop="8px" />
        <AddToBasket
          isDisabled={isOutOfStock}
          width="160px"
          fontSize="0.75rem"
          onAddProduct={handleAddProduct}
        />
      </Styled.Container>
    </Styled.Wrapper>
  );
}

export default forwardRef(ProductCard);
