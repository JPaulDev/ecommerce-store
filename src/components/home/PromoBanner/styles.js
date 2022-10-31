import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ebebeb;
  background-image: url(${({ background }) => background});
  background-position: calc(100% + 220px) 50%;
  background-repeat: no-repeat;
  background-size: auto 186px;
  border: 1px solid var(--color-grey-12);
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

export const Heading = styled.h4`
  font-family: 'Uni Sans', sans-serif;
  font-size: var(--font-size-28);

  @media screen and (min-width: 750px) {
    font-size: var(--font-size-38);
  }
`;

export const Text = styled.p`
  font-family: 'Uni Sans Book', sans-serif;
  line-height: 1.3;
  margin: 4px 0 10px;
  width: 45%;

  @media screen and (min-width: 750px) {
    font-size: var(--font-size-20);
    width: 35%;
  }
`;

export const LogoWrapper = styled.div`
  position: absolute;
  right: 25px;
  top: 25px;

  @media screen and (max-width: 849px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  bottom: -110px;
  position: absolute;
  right: -70px;

  @media screen and (min-width: 750px) {
    right: 10px;
  }
`;
