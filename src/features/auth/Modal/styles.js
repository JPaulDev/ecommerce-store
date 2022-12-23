import styled, { css } from 'styled-components';

export const Backdrop = styled.div`
  background-color: rgb(0 0 0 / 60%);
  bottom: 0;
  display: grid;
  left: 0;
  place-items: center;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1000;
  padding: 30px 15px;
`;

export const Container = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  padding: 30px 40px;
  position: relative;
  width: min(400px, 100%);
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes[14]};
  text-align: center;

  > h4 {
    font-size: ${({ theme }) => theme.fontSizes[20]};
  }

  > form {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    width: 100%;
  }
`;

export const CloseButton = styled.button`
  --size: 30px;

  width: var(--size);
  height: var(--size);
  border-radius: ${({ theme }) => theme.borderRadius.full};
  cursor: pointer;
  display: grid;
  place-items: center;
  position: absolute;
  right: 15px;
  top: 15px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[200]};
  }
`;

export const inputStyles = css`
  border: 1px solid
    ${({ theme, isInvalid }) =>
      isInvalid ? theme.colors.red[600] : theme.colors.stone[400]};
  outline: none;
  padding: 10px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.fontSizes[15]};

  &:focus {
    --main-color: ${({ theme }) => theme.colors.blue[500]};

    border: 1px solid var(--main-color);
    box-shadow: 0 0 0 1px var(--main-color);
  }
`;

export const ChangeViewButton = styled.button`
  color: ${({ theme }) => theme.colors.sky[600]};
  cursor: pointer;
  font-size: inherit;
  font-weight: 600;
  margin-left: 5px;

  &:hover {
    text-decoration: underline;
  }
`;
