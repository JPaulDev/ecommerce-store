import styled, { css } from 'styled-components';

const headingMixin = css`
  font-family: 'Uni Sans', sans-serif;
  font-weight: var(--font-weight-semibold);
`;

export const Container = styled.div`
  background-color: var(--color-red-3);
  background-image: url(${({ background }) => background});
  background-position: 96% 60%;
  background-repeat: no-repeat;
  border: 1px solid var(--color-grey-12);
  margin: 15px 0;
  overflow: hidden;
  padding: 20px 220px 27px 20px;
  position: relative;

  @media screen and (min-width: 935px) {
    display: flex;
    align-items: center;
    column-gap: 30px;
    background-image: none;
    background-color: white;
    padding: 25px 30px;
  }
`;

export const RedOval = styled.div`
  background: linear-gradient(to right, var(--color-red-4), var(--color-red-3));
  border-radius: 50%;
  height: 170px;
  left: -67px;
  position: absolute;
  width: 300px;

  @media screen and (max-width: 934px) {
    display: none;
  }
`;

export const LeftHeading = styled.h3`
  color: white;
  font-size: var(--font-size-26);
  z-index: 10;
  ${headingMixin}

  @media screen and (min-width: 575px) {
    font-size: var(--font-size-30);
    margin-right: 35px;
  }
`;

export const RightHeading = styled.h3`
  font-size: clamp(20px, 3.48vw, 25px);
  margin-right: auto;
  ${headingMixin}

  @media screen and (min-width: 700px) {
    font-size: var(--font-size-26);
  }

  @media screen and (max-width: 934px) {
    margin: 5px 0 15px;
  }
`;
