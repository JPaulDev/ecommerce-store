import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: -100;
`;

export const Background = styled.div`
  background-color: var(--color-grey-12);
  background-image: linear-gradient(var(--color-grey-15), var(--color-grey-15));
  background-position: center;
  background-repeat: no-repeat;
  background-size: 1294px 100%;
  display: flex;
  height: 100vh;
  justify-content: center;
  overflow: hidden;
  position: sticky;
  top: 0;

  img {
    display: none;

    @media screen and (min-width: 1310px) {
      display: initial;
    }
  }
`;
