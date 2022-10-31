import getTomorrowsDate from '../../../lib/utils/get-tomorrows-date';
import * as Styled from './styles';

const date = getTomorrowsDate();

export default function DeliveryDate({ stockStatus }) {
  const isOutOfStock = stockStatus <= 0;

  return isOutOfStock ? (
    <Styled.Text>
      <strong>Pre Order</strong>
    </Styled.Text>
  ) : (
    <Styled.Text>
      Get it <strong>Tomorrow, {date}</strong>
    </Styled.Text>
  );
}
