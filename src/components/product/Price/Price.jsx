import * as Styled from './styles';

export default function Price({
  children = '',
  fontSize = 16,
  fontWeight = 'regular',
}) {
  // Splits a price eg £1,100.99 into three chunks £ / 1,100 / .99
  const [, symbol, whole, fraction] =
    children.match(/(£)([0-9,]+)([.0-9]+)/) || [];

  return (
    <Styled.Text $fontSize={fontSize} $fontWeight={fontWeight}>
      <span>{symbol}</span>
      {whole}
      <span>{fraction}</span>
    </Styled.Text>
  );
}
