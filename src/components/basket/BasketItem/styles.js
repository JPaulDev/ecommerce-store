import styled from 'styled-components';

export const ListItem = styled.li`
  align-items: center;
  border-bottom: 1px solid var(--color-grey-9);
  display: flex;
  padding: 10px 0 30px;

  img {
    height: auto;
    margin-right: 20px;
    width: 120px;

    @media screen and (min-width: 900px) {
      width: 140px;
      height: auto;
    }
  }
`;

export const ProductDescription = styled.p`
  border-bottom: 3px solid var(--color-grey-9);
  font-family: 'Uni Sans', sans-serif;
  font-weight: 600;
  line-height: 1.4;
  margin: 3px 0 5px;
  padding-bottom: 10px;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
`;

export const RemoveProduct = styled.button`
  background: none;
  border-left: 1px solid var(--color-grey-10);
  cursor: pointer;
  font-size: 0.9rem;
  margin-left: 20px;
  padding-left: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

export const QuantitySelector = styled.div`
  background-color: var(--color-grey-6);
  display: inline-flex;
  margin-top: 10px;
  padding: 5px;
`;

export const IncreaseButton = styled.button`
  background-image: linear-gradient(to top, #3b7739, #55a952);
  color: white;
  cursor: pointer;
  display: grid;
  height: 22px;
  place-items: center;
  width: 22px;

  &:hover {
    background-image: linear-gradient(to top, #326830, #4a9b47);
  }
`;

export const DecreaseButton = styled(IncreaseButton)`
  background-image: linear-gradient(to top, #993b39, #cc5552);

  &:hover {
    background-image: linear-gradient(to top, #901c30, #cf3747);
  }
`;

export const Quantity = styled.span`
  color: #0c9444;
  font-weight: 600;
  min-width: 35px;
  padding: 0 5px;
  text-align: center;
`;
