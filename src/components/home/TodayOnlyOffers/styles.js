import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  margin-top: 15px;
`;

export const Banner = styled.div`
  background-color: ${({ theme }) => theme.colors.red[600]};
  background-image: url(${({ background }) => background});
  background-position: 96% 60%;
  background-repeat: no-repeat;
  border: 1px solid ${({ theme }) => theme.colors.stone[200]};
  overflow: hidden;
  padding: 20px 220px 30px 15px;
  position: relative;

  @media ${({ theme }) => theme.breakpoints.mobileLg} {
    padding: 20px 220px 30px 20px;
  }

  @media ${({ theme }) => theme.breakpoints.desktopXs} {
    display: flex;
    align-items: center;
    background-image: none;
    background-color: white;
    padding: 30px;
  }
`;

export const RedOval = styled.div`
  background-color: ${({ theme }) => theme.colors.red[600]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  left: -67px;
  position: absolute;
  height: 130px;
  width: 300px;
  display: none;

  @media ${({ theme }) => theme.breakpoints.desktopXs} {
    display: block;
  }
`;

export const Heading = styled.h2`
  color: white;
  display: flex;
  flex: 1;
  flex-direction: column;
  font-family: 'Uni Sans', sans-serif;
  font-size: ${({ theme }) => theme.fontSizes[30]};
  font-weight: 600;
  z-index: 10;
  line-height: 1;

  > span {
    color: black;
    font-size: ${({ theme }) => theme.fontSizes[20]};
    margin: 10px 0 15px;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    > span {
      font-size: ${({ theme }) => theme.fontSizes[24]};
    }
  }

  @media ${({ theme }) => theme.breakpoints.desktopXs} {
    align-items: center;
    flex-direction: row;
    column-gap: 70px;

    > span {
      margin: 0;
    }
  }
`;

export const Categories = styled.div`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.stone[200]};
  padding: 20px 5px;

  > ul {
    list-style: none;
    margin: 0 auto;
    max-width: 1200px;
    display: flex;

    > li {
      flex: 1;
      display: flex;
      justify-content: center;
    }
  }
`;

export const Button = styled.button`
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  display: flex;
`;

export const Wrapper = styled.span`
  --size: 65px;

  width: var(--size);
  height: var(--size);
  border-radius: ${({ theme }) => theme.borderRadius.full};
  box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.orange[500]};
  justify-content: center;
  margin-bottom: 5px;
  position: relative;
  align-items: center;
  display: flex;

  &::after {
    border-radius: inherit;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.orange[500]};
    content: '';
    height: 100%;
    opacity: 0;
    position: absolute;
    transition: opacity 200ms ease-in-out;
    width: 100%;

    ${Button}:hover & {
      opacity: 1;
    }
  }

  @media ${({ theme }) => theme.breakpoints.mobileLg} {
    --size: 70px;

    width: var(--size);
    height: var(--size);
  }

  @media ${({ theme }) => theme.breakpoints.tabletSm} {
    --size: 80px;

    width: var(--size);
    height: var(--size);
  }
`;

export const Category = styled.span`
  color: ${({ theme }) => theme.colors.stone[500]};
  font-size: ${({ theme }) => theme.fontSizes[12]};
  font-weight: 600;
  transition: color 200ms ease-in-out;

  ${Button}:hover & {
    color: ${({ theme }) => theme.colors.stone[800]};
  }

  @media ${({ theme }) => theme.breakpoints.tabletSm} {
    font-size: ${({ theme }) => theme.fontSizes[14]};
  }
`;

export const ProductList = styled.ul`
  --spacing: 10px;

  gap: var(--spacing);
  padding: 0 var(--spacing);
  display: grid;

  > :nth-child(4n) {
    display: none;
  }

  @media ${({ theme }) => theme.breakpoints.mobileLg} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${({ theme }) => theme.breakpoints.desktopXs} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${({ theme }) => theme.breakpoints.desktopMd} {
    grid-template-columns: repeat(4, 1fr);

    > :nth-child(4n) {
      display: flex;
    }
  }
`;
