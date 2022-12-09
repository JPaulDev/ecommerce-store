import styled, { css } from 'styled-components';

const inputMixin = css`
  border-radius: var(--border-radius-lg);
  font-size: inherit;
  width: 100%;
`;

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
  border-radius: var(--border-radius-2xl);
  font-size: var(--font-size-14);
  padding: 30px 40px;
  position: relative;
  text-align: center;
  width: min(400px, 90%);

  img {
    display: block;
    margin: 0 auto 25px;
  }
`;

export const CloseButton = styled.button`
  --size: 30px;

  border-radius: var(--border-radius-full);
  cursor: pointer;
  display: grid;
  height: var(--size);
  place-items: center;
  position: absolute;
  right: 15px;
  top: 15px;
  width: var(--size);

  &:hover {
    background-color: var(--color-grey-13);
  }
`;

export const Text = styled.p`
  margin-bottom: 10px;
`;

export const StatusMessage = styled.div`
  align-items: center;
  border: 1px solid var(--color-red-2);
  display: flex;
  margin: 15px 0 10px;
  padding: 10px;

  svg {
    fill: var(--color-red-2);
    flex-shrink: 0;
    margin-right: 10px;
  }
`;

export const inputStyles = css`
  border: 1px solid var(--color-grey-10);
  margin: 5px 0;
  outline: none;
  padding: 12px;
  ${inputMixin}

  ${({ isTouched, isValid }) => {
    if (!isTouched) return undefined;

    if (isValid) {
      return css`
        border-color: var(--color-green-3);
      `;
    }

    return css`
      border-color: var(--color-red-2);
    `;
  }}

  &:focus {
    border: 1px solid var(--color-blue-1);
    box-shadow: 0 0 0 1px var(--color-blue-1);
  }
`;

export const PrimaryBtn = styled.button`
  background-image: linear-gradient(
    to right,
    var(--color-blue-1),
    var(--color-indigo-1)
  );
  box-shadow: var(--box-shadow-md);
  color: white;
  cursor: pointer;
  font-weight: var(--font-weight-semibold);
  margin: 15px 0;
  min-height: 45px;
  padding: 13px;
  position: relative;
  ${inputMixin}

  &:disabled {
    cursor: initial;
  }

  &:not(:disabled):hover {
    box-shadow: inset 0 0 0 100px rgb(0 0 0 / 10%), var(--box-shadow-hover);
  }

  &:not(:disabled):active {
    transform: scale(0.96);
  }
`;

export const ErrorText = styled.p`
  color: var(--color-red-2);
  font-size: var(--font-size-13);
  font-weight: var(--font-weight-semibold);
  text-align: left;
`;

export const SecondaryBtn = styled.button`
  color: var(--color-sky-blue-4);
  cursor: pointer;
  font-size: inherit;
  font-weight: var(--font-weight-semibold);
  margin-left: 5px;

  &:hover {
    text-decoration: underline;
  }
`;
