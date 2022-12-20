import dynamic from 'next/dynamic';
import Image from 'next/future/image';
import { forwardRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  PartNumber,
  PreviousPrice,
  Price,
  Quantity,
  StockDisplay,
} from '../../../components/product';
import { usePrice } from '../../../hooks';
import { addProduct } from '../basketSlice';
import * as Styled from './style';

const DeliveryDate = dynamic(
  () => import('../../../components/product/DeliveryDate'),
  {
    ssr: false,
  }
);

function ProductCard({ product, variant }, ref) {
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
        <Styled.HorizontalCard ref={ref} data-testid="horizontal-card">
          <Image
            src={product.imageUrl}
            alt=""
            width={200}
            height={200}
            quality={90}
            priority="true"
          />
          <Styled.LeftContainer>
            <Image
              src={product.brand}
              alt=""
              width={110}
              height={24}
              quality={90}
            />
            {product.isOnSale && <div className="sale-tag">SALE</div>}
            <p>
              {product.name}, {product.description}
            </p>
            <PartNumber fontSize={12}>{product.sku}</PartNumber>
          </Styled.LeftContainer>
          <Styled.RightContainer>
            <div className="price-container">
              <Price fontSize={32}>{price}</Price>
              {product.isOnSale && (
                <PreviousPrice>{previousPrice}</PreviousPrice>
              )}
              <div className="quantity-wrapper">
                <Quantity
                  quantity={quantity}
                  onChangeQuantity={handleChangeQuantity}
                />
              </div>
            </div>
            <div>
              <button type="button" onClick={handleAddProduct}>
                Add To Basket
              </button>
              <div className="container">
                <StockDisplay stockStatus={product.stockStatus} />
                <DeliveryDate stockStatus={product.stockStatus} />
              </div>
            </div>
          </Styled.RightContainer>
        </Styled.HorizontalCard>
      )}

      {variant === 'vertical' && (
        <Styled.VerticalCard ref={ref} data-testid="vertical-card">
          <Image
            src={product.imageUrl}
            alt=""
            width={200}
            height={200}
            quality={90}
          />
          <p className="product-name">{product.name}</p>
          <p className="product-description">{product.description}</p>
          <PartNumber fontSize={12}>{product.sku}</PartNumber>
          <div className="divider" />
          <Price fontSize={30}>{price}</Price>
          {product.isOnSale && <PreviousPrice>{previousPrice}</PreviousPrice>}
          <Quantity
            quantity={quantity}
            isDisabled={product.stockStatus === 0}
            onChangeQuantity={handleChangeQuantity}
          />
          <StockDisplay stockStatus={product.stockStatus} marginTop="10px" />
          <button
            type="button"
            disabled={product.stockStatus === 0}
            onClick={handleAddProduct}
          >
            Add To Basket
          </button>
        </Styled.VerticalCard>
      )}
    </>
  );
}

export default forwardRef(ProductCard);
