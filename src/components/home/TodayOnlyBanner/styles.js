import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--color-red-2);
  background-image: url(${({ background }) => background});
  background-position: 96% 60%;
  background-repeat: no-repeat;
  border: 1px solid var(--color-grey-12);
  margin: 15px 0;
  overflow: hidden;
  padding: 20px 220px 30px 20px;
  position: relative;

  @media screen and (min-width: 935px) {
    display: flex;
    align-items: center;
    background-image: none;
    background-color: white;
    padding: 25px 30px;
  }
`;

export const RedOval = styled.div`
  background: linear-gradient(to right, var(--color-red-3), var(--color-red-2));
  border-radius: var(--border-radius-full);
  display: none;
  height: 170px;
  left: -67px;
  position: absolute;
  width: 300px;

  @media screen and (min-width: 935px) {
    display: initial;
  }
`;

export const Heading = styled.h2`
  color: white;
  display: flex;
  flex: 1;
  flex-direction: column;
  font-family: 'Uni Sans', sans-serif;
  font-size: var(--font-size-30);
  font-weight: var(--font-weight-semibold);
  z-index: 10;

  @media screen and (min-width: 935px) {
    align-items: center;
    flex-direction: row;
    column-gap: 70px;
  }
`;

export const InnerText = styled.span`
  color: black;
  font-size: var(--font-size-22);
  margin: 5px 0 15px;

  @media screen and (min-width: 700px) {
    font-size: var(--font-size-26);
  }

  @media screen and (min-width: 935px) {
    margin: 0;
  }
`;
