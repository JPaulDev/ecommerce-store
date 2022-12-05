import dynamic from 'next/dynamic';
import Image from 'next/future/image';
import { useState, forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../basketSlice';
import { usePrice } from '../../../hooks';
import {
  Price,
  PreviousPrice,
  PartNumber,
  Quantity,
  StockDisplay,
  AddToBasket,
} from '../../../components/product';
import * as Styled from './styles';

const DeliveryDate = dynamic(
  () => import('../../../components/product/DeliveryDate'),
  {
    ssr: false,
  }
);

function ProductCard({ product, variant = 'horizontal' }, ref) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const { price, previousPrice } = usePrice({
    isOnSale: product.isOnSale,
    discount: product.discount,
    price: product.price,
    currencyCode: product.currencyCode,
  });

  const handleChangeQuantity = (e) => setQuantity(Number(e.target.value));

  const handleAddProduct = () => {
    dispatch(addProduct(product, quantity));
    setQuantity(1);
  };

  return (
    <>
      {variant === 'horizontal' && (
        <Styled.ListItem ref={ref} variant={variant}>
          <Styled.ImageWrapper>
            <Image
              src={product.imageUrl}
              alt=""
              width={200}
              height={200}
              quality={90}
              priority="true"
            />
          </Styled.ImageWrapper>
          <Styled.LeftContainer>
            <Styled.LogoWrapper>
              <Image
                src={product.brand}
                alt=""
                width={110}
                height={24}
                quality={90}
              />
            </Styled.LogoWrapper>
            {product.isOnSale && <Styled.SaleTag>SALE</Styled.SaleTag>}
            <Styled.ProductDescription variant={variant}>
              {product.name}, {product.description}
            </Styled.ProductDescription>
            <PartNumber fontSize={13}>{product.sku}</PartNumber>
          </Styled.LeftContainer>
          <Styled.RightContainer>
            <Styled.PriceContainer>
              <Price fontSize={32}>{price}</Price>
              {product.isOnSale && (
                <PreviousPrice>{previousPrice}</PreviousPrice>
              )}
              <Styled.QuantityWrapper>
                <Quantity
                  quantity={quantity}
                  onChangeQuantity={handleChangeQuantity}
                />
              </Styled.QuantityWrapper>
            </Styled.PriceContainer>
            <Styled.ButtonContainer>
              <AddToBasket
                type="button"
                width="100%"
                fontSize={14}
                onAddProduct={handleAddProduct}
              />
              <Styled.InnerContainer>
                <StockDisplay stockStatus={product.stockStatus} />
                <DeliveryDate stockStatus={product.stockStatus} />
              </Styled.InnerContainer>
            </Styled.ButtonContainer>
          </Styled.RightContainer>
        </Styled.ListItem>
      )}

      {variant === 'vertical' && (
        <Styled.ListItem ref={ref} variant={variant}>
          <Image
            src={product.imageUrl}
            alt=""
            width={200}
            height={200}
            quality={90}
          />
          <Styled.ProductName>{product.name}</Styled.ProductName>
          <Styled.ProductDescription variant={variant}>
            {product.description}
          </Styled.ProductDescription>
          <Styled.PartNumberWrapper>
            <PartNumber fontSize={12}>{product.sku}</PartNumber>
          </Styled.PartNumberWrapper>
          <Price fontSize={30}>{price}</Price>
          {product.isOnSale && <PreviousPrice>{previousPrice}</PreviousPrice>}
          <Quantity
            quantity={quantity}
            isDisabled={product.stockStatus === 0}
            onChangeQuantity={handleChangeQuantity}
          />
          <StockDisplay stockStatus={product.stockStatus} marginTop="8px" />
          <AddToBasket
            isDisabled={product.stockStatus === 0}
            width="180px"
            fontSize={12}
            onAddProduct={handleAddProduct}
          />
        </Styled.ListItem>
      )}
    </>
  );
}

export default forwardRef(ProductCard);
