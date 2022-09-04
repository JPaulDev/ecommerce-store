import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: -100;
`;

export const Background = styled.div`
  background-color: var(--color-grey-9);
  background-image: url(${({ background }) => background});
  background-position: center top;
  background-repeat: no-repeat;
  height: 100vh;
  position: sticky;
  top: 0;
`;
