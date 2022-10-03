import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: -100;
`;

export const Background = styled.div`
  background-color: var(--color-grey-9);
  background-image: linear-gradient(var(--color-grey-6), var(--color-grey-6));
  background-position: center;
  background-repeat: no-repeat;
  background-size: 1294px 100%;
  height: 100vh;
  position: sticky;
  top: 0;

  img {
    left: 50%;
    position: absolute;
    transform: translateX(-50%);

    @media screen and (max-width: 1310px) {
      display: none;
    }
  }
`;
