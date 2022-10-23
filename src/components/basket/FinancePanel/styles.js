import styled, { css } from 'styled-components';

const flexStyles = css`
  align-items: center;
  display: flex;
`;

export const Container = styled.div`
  border-bottom: 1px solid var(--color-grey-9);
  column-gap: 25px;
  padding: 30px 10px;
  ${flexStyles}

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
  font-weight: 600;
  line-height: 1.4;
`;

export const Link = styled.a`
  color: var(--color-blue-1);
  column-gap: 5px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-top: 10px;
  text-decoration: none;
  text-transform: uppercase;
  ${flexStyles}
`;
