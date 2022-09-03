import styled from 'styled-components';

export const Container = styled.div`
  background-color: #d72140;
  background-image: url(${({ background }) => background});
  background-position: 96% 60%;
  background-repeat: no-repeat;
  border: 1px solid var(--color-grey-9);
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
  background: linear-gradient(to right, #c12134, #da2141);
  border-radius: 50%;
  height: 170px;
  left: -67px;
  position: absolute;
  width: 300px;

  @media screen and (max-width: 934px) {
    display: none;
  }
`;

export const LeftHeader = styled.h3`
  color: white;
  font-family: 'Uni Sans', sans-serif;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1;
  z-index: 10;

  @media screen and (min-width: 575px) {
    font-size: 1.95rem;
    margin-right: 30px;
  }
`;

export const RightHeader = styled.h3`
  font-family: 'Uni Sans', sans-serif;
  font-size: clamp(20px, 3.48vw, 25px);
  font-weight: 600;
  margin-right: auto;

  @media screen and (min-width: 700px) {
    line-height: 1;
    font-size: 1.6rem;
  }

  @media screen and (max-width: 934px) {
    margin: 10px 0 15px;
  }
`;
