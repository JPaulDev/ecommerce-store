import styled, { css } from 'styled-components';

const flexMixin = css`
  align-items: center;
  display: flex;
`;

export const Container = styled.div`
  border-bottom: 1px solid var(--color-grey-12);
  column-gap: 25px;
  padding: 30px 10px;
  ${flexMixin}

  img {
    height: auto;
    width: 100px;

    @media screen and (min-width: 600px) {
      width: 120px;
      height: auto;
    }
  }
`;

export const Text = styled.div`
  font-family: 'Uni Sans', sans-serif;
  font-weight: var(--font-weight-semibold);
  line-height: 1.4;
`;

export const Link = styled.a`
  color: var(--color-sky-blue-2);
  column-gap: 5px;
  font-size: var(--font-size-12);
  font-weight: var(--font-weight-semibold);
  margin-top: 10px;
  text-decoration: none;
  text-transform: uppercase;
  ${flexMixin}
`;
