import styled from 'styled-components';

export const ListItem = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.colors.stone[300]};
  padding: 10px 0 30px;
  align-items: center;
  display: flex;
  column-gap: 20px;

  > img {
    height: auto;
    width: 120px;
  }

  @media ${({ theme }) => theme.breakpoints.desktopXs} {
    > img {
      width: 140px;
    }
  }
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
`;

export const ProductDescription = styled.p`
  border-bottom: 2px solid ${({ theme }) => theme.colors.stone[300]};
  font-family: 'Uni Sans', sans-serif;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.5px;
  margin: 5px 0;
  padding-bottom: 10px;
`;

export const RemoveProduct = styled.button`
  --spacing: 20px;

  margin-left: var(--spacing);
  padding-left: var(--spacing);
  border-left: 1px solid ${({ theme }) => theme.colors.stone[400]};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes[14]};

  &:hover {
    text-decoration: underline;
  }
`;

export const QuantitySelector = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral[50]};
  border: 1px solid ${({ theme }) => theme.colors.stone[200]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  display: inline-flex;
  justify-content: space-between;
  margin-top: 15px;
  padding: 5px;
`;

export const IncreaseButton = styled.button`
  --size: 27px;

  height: var(--size);
  width: var(--size);
  background-image: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.green[500]},
    ${({ theme }) => theme.colors.green[700]}
  );
  border-radius: ${({ theme }) => theme.borderRadius.full};
  box-shadow: ${({ theme }) => theme.boxShadows.sm};
  color: white;
  cursor: pointer;
  display: grid;
  place-items: center;

  &:hover {
    box-shadow: inset 0 0 0 100px rgb(0 0 0 / 10%),
      ${({ theme }) => theme.boxShadows.sm};
  }

  &:active {
    transform: scale(0.92);
  }
`;

export const DecreaseButton = styled(IncreaseButton)`
  background-image: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.red[500]},
    ${({ theme }) => theme.colors.red[700]}
  );
`;

export const Quantity = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.stone[600]};
  display: flex;
  font-weight: 600;
  padding: 0 13px;
`;
