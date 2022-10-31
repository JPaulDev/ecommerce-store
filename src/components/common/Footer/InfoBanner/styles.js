import styled, { css } from 'styled-components';

const flexMixin = css`
  align-items: center;
  display: flex;
`;

export const Container = styled.div`
  background-color: white;
  flex-direction: column;
  padding: 20px 0;
  row-gap: 15px;
  ${flexMixin}

  @media screen and (min-width: 910px) {
    padding-left: 30px;
    padding-right: 15px;
    flex-direction: row;
  }
`;

export const Text = styled.p`
  flex: 1;
  font-size: var(--font-size-12);
  margin: 0 15px;
  text-align: center;

  @media screen and (min-width: 910px) {
    text-align: left;
    padding-right: 10px;
    max-width: 350px;
    margin-left: 20px;
    margin-right: auto;
  }
`;

export const InnerContainer = styled.div`
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 8px;
  ${flexMixin}

  & :last-child {
    border: 0;
  }
`;

export const LinkContainer = styled.div`
  border-right: 1px solid var(--color-grey-9);
  column-gap: 12px;
  font-family: 'Uni Sans', sans-serif;
  font-size: var(--font-size-18);
  font-weight: var(--font-weight-semibold);
  padding: 0 15px;
  ${flexMixin}
`;

export const Link = styled.a`
  color: black;
  column-gap: 8px;
  font-family: inherit;
  text-decoration: none;
  ${flexMixin}

  &:hover {
    color: var(--color-blue-3);
  }
`;
