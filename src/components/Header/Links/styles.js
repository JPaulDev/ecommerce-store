import styled from 'styled-components';

export const Container = styled.div`
  column-gap: 20px;
  display: flex;
  justify-content: flex-end;

  @media screen and (min-width: 1190px) {
    column-gap: 40px;
  }
`;

export const Link = styled.a`
  align-items: center;
  color: var(--color-grey-3);
  column-gap: 10px;
  display: flex;
  text-decoration: none;
  transition: color 200ms ease-in-out;

  &:hover {
    color: white;
  }
`;

export const TopText = styled.span`
  color: white !important;
  display: block;
`;

export const Text = styled.span`
  font-size: 0.8rem;
`;