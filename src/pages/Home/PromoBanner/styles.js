import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ebebeb;
  background-image: url(${({ background }) => background});
  background-position: calc(100% + 220px) 50%;
  background-repeat: no-repeat;
  background-size: auto 186px;
  border: 1px solid var(--color-grey-9);
  margin-top: 15px;
  min-height: 185px;
  overflow: hidden;
  padding: 15px;
  position: relative;

  @media screen and (min-width: 550px) {
    padding: 15px 25px;
  }

  @media screen and (min-width: 750px) {
    background-position: calc(100% + 345px) 50%;
    background-size: auto 291px;
    min-height: 250px;
    padding: 25px;
  }

  @media screen and (min-width: 850px) {
    background-position: center;
  }
`;

export const Title = styled.h4`
  font-family: 'Uni Sans', sans-serif;
  font-size: 1.75rem;

  @media screen and (min-width: 750px) {
    font-size: 2.6rem;
  }
`;

export const Text = styled.p`
  font-family: 'Uni Sans Book', sans-serif;
  font-size: 1.06rem;
  line-height: 1.3;
  margin: 4px 0 10px;
  width: 45%;

  @media screen and (min-width: 750px) {
    font-size: 1.2rem;
    width: 35%;
  }
`;

export const Logo = styled.img`
  height: 73px;
  position: absolute;
  right: 25px;
  top: 25px;
  width: 93px;
`;

export const BlueDetail = styled.img`
  bottom: -105px;
  position: absolute;
  right: -70px;

  @media screen and (min-width: 750px) {
    bottom: -100px;
    right: 10px;
  }
`;
