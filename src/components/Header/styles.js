import styled from 'styled-components';

export const Header = styled.header`
  background-color: var(--color-grey-1);
  box-shadow: 0 3px 2px 0 rgb(0 0 0 / 20%);
  width: 100%;
`;

export const Container = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0 auto;
  max-width: 1280px;
  padding: 20px 15px;
  width: 97%;
`;

export const HeaderLogo = styled.img`
  height: 36px;
  width: 170px;
`;
