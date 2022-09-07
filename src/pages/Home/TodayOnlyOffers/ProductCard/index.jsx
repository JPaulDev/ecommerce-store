import { useState, forwardRef } from 'react';
import usePrice from '../../../../hooks/usePrice';
import Price from '../../../../components/Price';
import PreviousPrice from '../../../../components/PreviousPrice';
import PartNumber from '../../../../components/PartNumber';
import QuantityDropdown from '../../../../components/QuantityDropdown';
import StockIndicator from '../../../../components/StockIndicator';
import AddToBasketButton from '../../../../components/AddToBasketButton';
import * as Styled from './styles';

const ProductCard = forwardRef(({ product }, ref) => {
  const [quantity, setQuantity] = useState(1);
  const { price, salePrice } = usePrice(product);

  const handleChangeQuantity = (e) => setQuantity(parseInt(e.target.value, 10));

  return (
    <Styled.Wrapper ref={ref}>
      <Styled.Container>
        <Styled.ProductImage
          src={product.image}
          alt=""
          width={200}
          height={200}
        />
        <Styled.ProductName>{product.name}</Styled.ProductName>
        <Styled.ProductDescription>
          {product.description.join(', ')}
        </Styled.ProductDescription>
        <Styled.PartNumberWrapper>
          <PartNumber $fontSize="0.75rem">{product.sku}</PartNumber>
        </Styled.PartNumberWrapper>
        <Price price={salePrice || price} fontSize="1.9rem" />
        {salePrice && <PreviousPrice price={price} fontSize="0.93rem" />}
        <QuantityDropdown
          quantity={quantity}
          isDisabled={!product.stock}
          onChangeQuantity={handleChangeQuantity}
        />
        <StockIndicator stock={product.stock} marginTop="8px" />
        <AddToBasketButton
          type="button"
          disabled={!product.stock}
          $width="160px"
          $fontSize="0.75rem"
        >
          Add To Basket
        </AddToBasketButton>
      </Styled.Container>
    </Styled.Wrapper>
  );
});

export default ProductCard;
