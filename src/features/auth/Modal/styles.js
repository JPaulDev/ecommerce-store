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
`;

export const Container = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  font-size: ${({ theme }) => theme.fontSizes[14]};
  padding: 30px 40px;
  position: relative;
  text-align: center;
  width: min(400px, 90%);

  > img {
    margin-bottom: 15px;
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

export const Text = styled.p`
  margin-bottom: 10px;
`;

export const StatusMessage = styled.div`
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.red[600]};
  display: flex;
  column-gap: 10px;
  margin: 15px 0 10px;
  padding: 10px;

  > svg {
    fill: ${({ theme }) => theme.colors.red[600]};
    flex-shrink: 0;
  }
`;

export const inputStyles = css`
  border: 1px solid;
  margin: 5px 0;
  outline: none;
  padding: 12px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.fontSizes[15]};
  width: 100%;

  ${({ isTouched, isInvalid }) => {
    if (isTouched && isInvalid) {
      return css`
        border-color: ${({ theme }) => theme.colors.red[600]};
      `;
    }

    return css`
      border-color: ${({ theme }) => theme.colors.stone[400]};
    `;
  }}

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.blue[500]};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.blue[500]};
  }
`;

export const SubmitButton = styled.button`
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.blue[500]},
    ${({ theme }) => theme.colors.indigo[500]}
  );
  box-shadow: ${({ theme }) => theme.boxShadows.md};
  color: white;
  font-weight: 600;
  margin: 15px 0;
  min-height: 45px;
  padding: 13px;
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: inherit;
  width: 100%;

  &:not(:disabled) {
    cursor: pointer;
  }

  &:not(:disabled):hover {
    box-shadow: inset 0 0 0 100px rgb(0 0 0 / 10%),
      ${({ theme }) => theme.boxShadows.hover};
  }

  &:not(:disabled):active {
    transform: scale(0.96);
  }
`;

export const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.red[600]};
  font-size: ${({ theme }) => theme.fontSizes[13]};
  font-weight: 600;
  text-align: left;
`;

export const ChangeViewButton = styled.button`
  color: ${({ theme }) => theme.colors.sky[500]};
  cursor: pointer;
  font-size: inherit;
  font-weight: 600;
  margin-left: 5px;

  &:hover {
    text-decoration: underline;
  }
`;
