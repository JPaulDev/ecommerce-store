import styled, { css } from 'styled-components';

const flexMixin = css`
  align-items: center;
  display: flex;
`;

export const Container = styled.div`
  ${flexMixin}
`;

export const ListItem = styled.li`
  border-bottom: 1px solid var(--color-grey-12);
  padding: 10px 0 30px;
  ${flexMixin}

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
  border-bottom: 3px solid var(--color-grey-12);
  font-family: 'Uni Sans', sans-serif;
  font-weight: var(--font-weight-semibold);
  line-height: 1.5;
  margin: 3px 0 5px;
  padding-bottom: 10px;
`;

export const RemoveProduct = styled.button`
  border-left: 1px solid var(--color-grey-9);
  cursor: pointer;
  font-size: var(--font-size-14);
  margin-left: 20px;
  padding-left: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

export const QuantitySelector = styled.div`
  background-color: var(--color-grey-15);
  border-radius: 5px;
  display: inline-flex;
  justify-content: space-between;
  margin-top: 10px;
  min-width: 105px;
  padding: 6px;
`;

export const IncreaseButton = styled.button`
  background-image: linear-gradient(
    to top,
    var(--color-green-2),
    var(--color-green-5)
  );
  border-radius: 4px;
  box-shadow: var(--box-shadow-md);
  color: white;
  cursor: pointer;
  display: grid;
  height: 25px;
  place-items: center;
  width: 25px;

  &:hover {
    background-image: linear-gradient(
      to top,
      var(--color-green-1),
      var(--color-green-4)
    );
    box-shadow: var(--box-shadow-hover);
  }
`;

export const DecreaseButton = styled(IncreaseButton)`
  background-image: linear-gradient(
    to top,
    var(--color-red-2),
    var(--color-red-5)
  );

  &:hover {
    background-image: linear-gradient(
      to top,
      var(--color-red-1),
      var(--color-red-4)
    );
  }
`;

export const Quantity = styled.div`
  align-items: center;
  color: var(--color-green-3);
  display: flex;
  font-weight: var(--font-weight-semibold);
  justify-content: center;
  min-width: 35px;
  padding: 0 5px;
  ${flexMixin}
`;
