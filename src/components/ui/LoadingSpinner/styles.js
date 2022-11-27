import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  align-items: center;
  display: inline-flex;
  font-size: inherit;
  position: relative;
`;

export const Spinner = styled.div`
  animation: 0.75s linear infinite ${rotate};
  border: 0.2em solid currentColor;
  border-radius: 50%;
  border-right-color: transparent;
  height: 1.125em;
  margin-right: 7px;
  position: absolute;
  right: 100%;
  width: 1.125em;
`;
