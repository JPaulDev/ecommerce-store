import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  row-gap: 15px;

  @media screen and (min-width: 910px) {
    padding-left: 30px;
    padding-right: 15px;
    flex-direction: row;
  }
`;

export const Text = styled.p`
  flex: 1;
  font-size: 0.75rem;
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 8px;

  & :last-child {
    border: 0;
  }
`;

export const LinkContainer = styled.div`
  align-items: center;
  border-right: 1px solid var(--color-grey-10);
  column-gap: 12px;
  display: flex;
  font-family: 'Uni Sans', sans-serif;
  font-size: 1.15rem;
  font-weight: 600;
  padding: 0 15px;
`;

export const Link = styled.a`
  align-items: center;
  color: black;
  column-gap: 5px;
  display: flex;
  font-family: inherit;
  text-decoration: none;

  &:hover {
    color: var(--color-blue-2);
  }
`;
