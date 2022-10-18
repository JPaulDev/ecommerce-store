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
  border-radius: 5px;
  display: inline-flex;
  justify-content: space-between;
  margin-top: 10px;
  min-width: 105px;
  padding: 6px;
`;

export const IncreaseButton = styled.button`
  background-image: linear-gradient(to top, #3b7739, #55a952);
  border-radius: 4px;
  box-shadow: var(--shadow-button);
  color: white;
  cursor: pointer;
  display: grid;
  height: 25px;
  place-items: center;
  width: 25px;

  &:hover {
    background-image: linear-gradient(to top, #326830, #4a9b47);
    box-shadow: var(--shadow-button-hover);
  }
`;

export const DecreaseButton = styled(IncreaseButton)`
  background-image: linear-gradient(to top, #993b39, #cc5552);

  &:hover {
    background-image: linear-gradient(to top, #901c30, #cf3747);
  }
`;

export const Quantity = styled.span`
  align-items: center;
  color: #0c9444;
  display: flex;
  font-weight: 600;
  justify-content: center;
  min-width: 35px;
  padding: 0 5px;
`;
