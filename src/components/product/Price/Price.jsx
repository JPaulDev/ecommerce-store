import styled from 'styled-components';

export default function Price({
  children = '',
  fontSize = 16,
  fontWeight = 400,
}) {
  // Splits a price eg £1,100.99 into three chunks £ / 1,100 / .99.
  const [, symbol, whole, fraction] =
    children.match(/(£)([0-9,]+)([.0-9]+)/) || [];

  return (
    <Text $fontSize={fontSize} $fontWeight={fontWeight}>
      <span>{symbol}</span>
      {whole}
      <span>{fraction}</span>
    </Text>
  );
}

const Text = styled.div`
  color: ${({ theme }) => theme.colors.sky[700]};
  font-size: ${({ theme, $fontSize }) => theme.fontSizes[$fontSize]};
  font-weight: ${({ $fontWeight }) => $fontWeight};

  > span {
    font-size: 0.7em;
  }
`;
