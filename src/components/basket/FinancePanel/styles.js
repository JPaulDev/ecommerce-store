import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  border-bottom: 1px solid var(--color-grey-9);
  column-gap: 25px;
  display: flex;
  padding: 30px 10px;

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
  align-items: center;
  color: var(--color-blue-1);
  column-gap: 5px;
  display: flex;
  font-size: 0.75rem;
  font-weight: 600;
  margin-top: 10px;
  text-decoration: none;
  text-transform: uppercase;
`;
