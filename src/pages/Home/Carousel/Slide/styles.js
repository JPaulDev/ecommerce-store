import styled from 'styled-components';

export const Container = styled.div`
  background-image: linear-gradient(to right, #00000080, #00000030),
    url(${({ background }) => background});
  background-position: center, calc(100% + 383px) top;
  background-repeat: no-repeat;
  margin-right: -100%;
  min-height: 450px;
  padding: 10px 20px 0;
  position: relative;
  width: 100%;

  @media screen and (min-width: 550px) {
    padding: 10px 60px 0;
  }

  @media screen and (min-width: 715px) {
    padding: 90px 60px 0;
    min-height: 385px;
    background-image: url(${({ background }) => background});
    background-position: calc(100% + 383px) calc(50% + 30px);
  }

  @media screen and (min-width: 1000px) {
    display: flex;
    background-position: center calc(50% + 20px);
    justify-content: space-between;
  }
`;

export const LeftContainer = styled.div`
  color: white;
  text-align: center;

  @media screen and (min-width: 715px) {
    width: 40%;
    text-align: left;
  }

  @media screen and (min-width: 1000px) {
    width: 30%;
  }
`;

export const LeftLogo = styled.img`
  height: 15px;
  margin-top: 10px;
  width: 125px;

  @media screen and (min-width: 715px) {
    width: 158px;
    height: 19px;
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

export const CenterImage = styled.img`
  height: 275px;
  left: 50%;
  position: absolute;
  top: 180px;
  transform: translateX(-50%);
  width: 325px;

  @media screen and (min-width: 715px) {
    transform: translateX(-10%);
    top: 100px;
  }

  @media screen and (min-width: 850px) {
    width: 350px;
    height: 296px;
    top: 90px;
    right: 110px;
    left: initial;
    transform: initial;
  }

  @media screen and (min-width: 1000px) {
    width: 325px;
    height: 275px;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media screen and (min-width: 1100px) {
    width: 375px;
    height: 317px;
    top: 80px;
  }
`;

export const RightContainer = styled.div`
  color: ${({ textColor }) => textColor || 'black'};
  width: 30%;
`;

export const RightHeading = styled.h4`
  font-family: 'Uni Sans', sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
  margin-left: 10px;
`;

export const RightLogo = styled.img`
  margin-left: 15px;
`;

export const List = styled.ul`
  font-size: 0.88rem;
  padding: 10px 0 0 18px;
`;

export const ListItem = styled.li`
  padding: 5px 0;
`;
