import styled from 'styled-components';

export const Container = styled.div`
  background-color: black;
  margin-right: -100%;
  min-height: 450px;
  overflow: hidden;
  padding: 10px 20px 0;
  position: relative;
  width: 100%;

  @media screen and (min-width: 550px) {
    padding: 10px 60px 0;
  }

  @media screen and (min-width: 715px) {
    padding: 90px 60px 0;
    min-height: 385px;
  }

  @media screen and (min-width: 1000px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Background = styled.div`
  position: absolute;
  right: -383px;
  top: 0;

  @media screen and (max-width: 714px) {
    &::after {
      background-image: linear-gradient(
        to right,
        rgb(0 0 0 / 40%),
        rgb(0 0 0 / 15%)
      );
      content: '';
      height: 100%;
      left: 0;
      position: absolute;
      width: 100%;
    }
  }

  @media screen and (min-width: 1000px) {
    right: initial;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const LeftContainer = styled.div`
  color: white;
  position: relative;
  text-align: center;

  @media screen and (min-width: 715px) {
    width: 40%;
    text-align: left;
  }

  @media screen and (min-width: 1000px) {
    width: 30%;
  }
`;

export const LeftLogoWrapper = styled.div`
  display: inline-block;
  margin-top: 10px;

  img {
    display: block;
    height: auto;
    max-width: 100%;
  }

  @media screen and (max-width: 714px) {
    width: 125px;
  }
`;

export const LeftHeading = styled.h4`
  font-family: 'Uni Sans', sans-serif;
  font-size: 1.93rem;
  margin-bottom: 10px;
  margin-top: 5px;

  @media screen and (min-width: 715px) {
    margin-top: 15px;
  }
`;

export const Text = styled.p`
  font-size: 0.88rem;
  line-height: 1.6;
`;

export const CenterImageWrapper = styled.div`
  left: 50%;
  position: absolute;
  top: 180px;
  transform: translateX(-50%);
  width: 325px;

  img {
    display: block;
    height: auto;
    max-width: 100%;
  }

  @media screen and (min-width: 715px) {
    transform: translateX(-10%);
    top: 100px;
  }

  @media screen and (min-width: 850px) {
    width: 350px;
    top: 90px;
    right: 110px;
    left: initial;
    transform: initial;
  }

  @media screen and (min-width: 1000px) {
    width: 325px;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media screen and (min-width: 1100px) {
    width: 375px;
    top: 80px;
  }
`;

export const RightContainer = styled.div`
  color: ${({ textColor }) => textColor};
  position: relative;
  width: 30%;

  @media screen and (max-width: 999px) {
    display: none;
  }
`;

export const RightHeading = styled.h4`
  font-family: 'Uni Sans', sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
  margin-left: 10px;
  text-indent: 10px;

  img {
    margin-left: 15px;
  }
`;

export const List = styled.ul`
  font-size: 0.9rem;
  padding: 10px 0 0 18px;

  li {
    padding: 5px 0;
  }
`;
