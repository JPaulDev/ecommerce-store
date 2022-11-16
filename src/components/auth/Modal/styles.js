import styled, { css } from 'styled-components';

const inputMixin = css`
  border-radius: 6px;
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
  border-radius: 12px;
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
  border-radius: 100%;
  cursor: pointer;
  display: grid;
  height: 30px;
  place-items: center;
  position: absolute;
  right: 15px;
  top: 15px;
  width: 30px;

  &:hover {
    background-color: var(--color-grey-13);
  }
`;

export const Text = styled.p`
  margin-bottom: 10px;
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
  padding: 13px;
  ${inputMixin}

  &:hover {
    box-shadow: inset 0 0 0 100px rgb(0 0 0 / 10%), var(--box-shadow-hover);
  }

  &:not(:disabled):active {
    transform: scale(0.96);
  }
`;

export const ErrorText = styled.p`
  color: var(--color-red-2);
  display: block;
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
