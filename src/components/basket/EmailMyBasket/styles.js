import styled, { css } from 'styled-components';

export const Container = styled.div`
  background-color: var(--color-grey-15);
  border: 1px solid var(--color-grey-12);
  border-radius: var(--border-radius-2xl);
  font-size: var(--font-size-12);
  margin-top: 25px;
  padding: 20px 30px 30px;
`;

export const Heading = styled.h2`
  border-bottom: 1px solid var(--color-grey-9);
  font-family: 'Uni Sans', sans-serif;
  font-size: var(--font-size-22);
  font-weight: var(--font-weight-semibold);
  margin-bottom: 15px;
  padding: 10px 0;

  @media screen and (max-width: 899px) {
    text-align: center;
  }
`;

export const inputStyles = css`
  border: 1px solid var(--color-grey-5);
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  padding: 10px;
  width: 70%;
`;

export const Button = styled.button`
  background: linear-gradient(
    to bottom,
    var(--color-sky-blue-3),
    var(--color-sky-blue-1)
  );
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  box-shadow: var(--box-shadow-md);
  color: white;
  cursor: pointer;
  font-weight: var(--font-weight-bold);
  padding: 11px 15px;
  text-transform: uppercase;
  width: 30%;

  &:hover {
    box-shadow: inset 0 0 0 100px rgb(0 0 0 / 10%), var(--box-shadow-hover);
  }
`;

export const CheckboxContainer = styled.div`
  align-items: center;
  display: flex;
  font-size: var(--font-size-13);
  margin: 20px 0;
`;

export const Checkbox = styled.input`
  flex-shrink: 0;
  height: 20px;
  margin-right: 10px;
  width: 20px;
`;

export const Link = styled.a`
  color: var(--color-sky-blue-2);
  font-weight: var(--font-weight-bold);
  margin-left: 5px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
