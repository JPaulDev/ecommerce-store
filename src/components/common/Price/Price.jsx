import * as Styled from './styles';

export default function Price({ price = '', fontSize, fontWeight }) {
  // Splits a price eg £1,100.99 into three chunks £ / 1,100 / .99
  const [, symbol, whole, fraction] =
    price.match(/(£)([0-9,]+)([.0-9]+)/) || [];

  return (
    <Styled.Text $fontSize={fontSize} $fontWeight={fontWeight}>
      <Styled.SmallText>{symbol}</Styled.SmallText>
      {whole}
      <Styled.SmallText>{fraction}</Styled.SmallText>
    </Styled.Text>
  );
}
