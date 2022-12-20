import styled from 'styled-components';
import getTomorrowsDate from '../../../utils/get-tomorrows-date';

const date = getTomorrowsDate();

export default function DeliveryDate({ stockStatus }) {
  const isOutOfStock = stockStatus <= 0;

  return isOutOfStock ? (
    <Text>
      <strong>Pre Order</strong>
    </Text>
  ) : (
    <Text>
      Get it <strong>Tomorrow, {date}</strong>
    </Text>
  );
}

const Text = styled.div`
  color: ${({ theme }) => theme.colors.sky[700]};
  font-size: ${({ theme }) => theme.fontSizes[11]};

  > strong {
    text-transform: uppercase;
  }
`;
