import styled from 'styled-components';

export const PrevSlideBtn = styled.button`
  background-color: white;
  border-radius: 50%;
  box-shadow: 1px 4px 4px rgb(0 0 0 / 50%);
  cursor: pointer;
  display: flex;
  left: 15px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  user-select: none;
  z-index: 10;
`;

export const NextSlideBtn = styled(PrevSlideBtn)`
  left: initial;
  right: 15px;
`;
