import Image from 'next/future/image';
import Link from 'next/link';
import { memo } from 'react';
import finance from '../../../../public/images/basket/finance.webp';
import paypal from '../../../../public/images/basket/paypal-credit.webp';
import { Info } from '../../icons';
import * as Styled from './styles';

function FinancePanel() {
  return (
    <div>
      <Styled.Container>
        <Image src={paypal} alt="PayPal credit." />
        <div>
          <Styled.Text>
            Spread the cost for up to 48 months (9.9% p.a fixed) or 0% for 4
            months.
          </Styled.Text>
          <Link href="/" passHref>
            <Styled.Link>
              <Info width={20} height={20} />
              More Info About PayPal Credit
            </Styled.Link>
          </Link>
        </div>
      </Styled.Container>
      <Styled.Container>
        <Image src={finance} alt="Pay on finance." />
        <div>
          <Styled.Text>
            Finance Classic Credit 48 Months 15.9%, Pay a deposit followed by 48
            monthly payments.
          </Styled.Text>
          <Link href="/" passHref>
            <Styled.Link>
              <Info width={20} height={20} />
              More Info About Finance Classic Credit
            </Styled.Link>
          </Link>
        </div>
      </Styled.Container>
    </div>
  );
}

export default memo(FinancePanel);
