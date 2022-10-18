import styled from 'styled-components';

export const TopContainer = styled.div`
  background-color: #d7f0db;
  border-left: 1px solid var(--color-grey-9);
  border-right: 1px solid var(--color-grey-9);
  border-top: 1px solid var(--color-grey-9);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 20px 30px;
`;

export const Heading = styled.h2`
  border-bottom: 1px solid var(--color-grey-10);
  font-family: 'Uni Sans', sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 15px;
  padding: 11px 0;

  @media screen and (max-width: 899px) {
    text-align: center;
  }
`;

export const Container = styled.div`
  align-items: center;
  column-gap: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 5px 0;

  strong {
    font-size: 1.25rem;
    margin-right: 5px;
  }
`;

export const Text = styled.span`
  font-size: ${({ $fontSize }) => $fontSize || '0.82rem'};
`;

export const InnerContainer = styled.div`
  border-top: 1px solid var(--color-grey-10);
  margin-top: 15px;
  padding: 20px 0 10px;
`;

export const CheckoutLink = styled.a`
  align-items: center;
  background-image: linear-gradient(to top, #009245, #02ab52);
  border-radius: 6px;
  box-shadow: var(--shadow-button);
  color: white;
  column-gap: 10px;
  display: flex;
  font-size: 0.88rem;
  font-weight: 700;
  justify-content: center;
  margin: 0 auto 20px;
  padding: 15px;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    background-image: linear-gradient(to top, #008631, #00a13f);
    box-shadow: var(--shadow-button-hover);
  }
`;

export const LoginLink = styled.a`
  color: var(--color-blue-1);
  display: block;
  font-size: 0.7rem;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    text-decoration: underline;
  }
`;

export const BottomContainer = styled.div`
  align-items: center;
  background-color: #cadfce;
  border-bottom: 1px solid var(--color-grey-9);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left: 1px solid var(--color-grey-9);
  border-right: 1px solid var(--color-grey-9);
  display: flex;
  flex-direction: column;
  padding: 20px 30px 30px;

  img {
    margin-top: 5px;
  }
`;

export const PaypalLink = styled.a`
  background-color: #ffc439;
  border-radius: 100px;
  display: flex;
  margin: 5px 0;
  padding: 10px 25px;

  &:hover {
    box-shadow: inset 0 0 100px 100px rgb(0 0 0 / 5%);
  }
`;
