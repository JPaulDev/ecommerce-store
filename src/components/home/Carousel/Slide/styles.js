import styled from 'styled-components';

export const Container = styled.div`
  background-color: black;
  margin-right: -100%;
  min-height: 450px;
  overflow: hidden;
  padding: 15px 20px;
  position: relative;
  width: 100%;

  .center-image {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 170px;
    width: 325px;
    height: auto;
  }

  @media ${({ theme }) => theme.breakpoints.mobileLg} {
    padding: 15px 60px;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    padding: 90px 60px 30px;
    min-height: 385px;

    .center-image {
      transform: translateX(-10%);
      top: 100px;
    }
  }

  @media ${({ theme }) => theme.breakpoints.desktopXs} {
    .center-image {
      width: 350px;
      top: 90px;
      right: 110px;
      left: auto;
      transform: none;
    }
  }

  @media ${({ theme }) => theme.breakpoints.desktopSm} {
    display: flex;
    justify-content: space-between;

    .center-image {
      width: 325px;
      top: 100px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @media ${({ theme }) => theme.breakpoints.desktopMd} {
    .center-image {
      width: 370px;
      top: 80px;
    }
  }
`;

export const Background = styled.div`
  position: absolute;
  right: -383px;
  top: 0;

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

  @media ${({ theme }) => theme.breakpoints.tablet} {
    &::after {
      display: none;
    }
  }

  @media ${({ theme }) => theme.breakpoints.desktopSm} {
    right: auto;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const LeftContainer = styled.div`
  color: white;
  position: relative;
  text-align: center;

  > img {
    width: 125px;
    height: auto;
  }

  > h2 {
    font-family: 'Uni Sans', sans-serif;
    font-size: ${({ theme }) => theme.fontSizes[30]};
    margin: 5px 0 10px;
  }

  > p {
    font-size: ${({ theme }) => theme.fontSizes[14]};
    line-height: 1.7;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 40%;
    text-align: left;

    > img {
      width: auto;
    }

    > h2 {
      margin-top: 15px;
    }
  }

  @media ${({ theme }) => theme.breakpoints.desktopSm} {
    width: 30%;
  }
`;

export const RightContainer = styled.div`
  --left-padding: 15px;

  color: ${({ textColor }) => textColor};
  position: relative;
  width: 30%;
  display: none;

  > h2 {
    padding-left: var(--left-padding);
    font-family: 'Uni Sans', sans-serif;
    font-size: ${({ theme }) => theme.fontSizes[20]};
    font-weight: 600;

    > img {
      margin-left: 15px;
    }
  }

  > ul {
    padding: 10px 0 0 var(--left-padding);
    font-size: ${({ theme }) => theme.fontSizes[14]};
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }

  @media ${({ theme }) => theme.breakpoints.desktopSm} {
    display: block;
  }
`;
