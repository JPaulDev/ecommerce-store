import styled, { css } from 'styled-components';
import { Clipboard } from '../../icons';

export default function StockDisplay({ stockStatus, marginTop }) {
  let text = 'In Stock';
  let title = 'Item is in stock';
  let color = 'green-600';

  if (stockStatus === 1) {
    text = 'Low Stock';
    title = 'Item is nearly sold out';
    color = 'orange-500';
  } else if (stockStatus === 0) {
    text = 'Out of Stock';
    title = 'Item is out of stock';
    color = 'red-500';
  }

  return (
    <Container $color={color} title={title} marginTop={marginTop}>
      <Clipboard width={18} height={18} />
      {text}
    </Container>
  );
}

const Container = styled.div`
  align-items: center;
  column-gap: 5px;
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes[11]};
  font-weight: 700;
  margin-top: ${({ marginTop }) => marginTop};
  text-transform: uppercase;

  ${({ theme, $color }) => {
    const [color, shade] = $color.split('-');

    return css`
      color: ${theme.colors[color][shade]};
    `;
  }};

  > svg {
    fill: ${({ theme }) => theme.colors.stone[500]};
  }
`;
