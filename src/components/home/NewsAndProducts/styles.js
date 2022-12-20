import styled from 'styled-components';

export const Section = styled.section`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.stone[200]};
  display: flex;
  margin-top: 15px;
  padding: 20px 25px;

  @media ${({ theme }) => theme.breakpoints.tabletSm} {
    padding: 30px 0;
  }

  @media ${({ theme }) => theme.breakpoints.desktopSm} {
    > article {
      flex: 1;
    }
  }
`;

export const Heading = styled.h2`
  font-family: 'Uni Sans Book', sans-serif;
  font-size: ${({ theme }) => theme.fontSizes[30]};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  text-align: center;

  @media ${({ theme }) => theme.breakpoints.tabletSm} {
    text-align: left;
    margin-left: ${({ marginLeft }) => marginLeft};
  }
`;

export const ArticlesContainer = styled.div`
  display: flex;
  row-gap: 15px;
  flex-direction: column;

  > :last-child {
    border: 0;
    padding-bottom: 0;
  }

  @media ${({ theme }) => theme.breakpoints.tabletSm} {
    flex-direction: row;
  }
`;

export const Article = styled.article`
  flex: 1 1 250px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.stone[300]};
  align-items: center;

  > h3 {
    font-family: 'Uni Sans Book', sans-serif;
    font-size: ${({ theme }) => theme.fontSizes[18]};
    letter-spacing: 0.8px;
    text-align: center;
  }

  > time {
    color: ${({ theme }) => theme.colors.stone[500]};
    font-size: ${({ theme }) => theme.fontSizes[14]};
  }

  > p {
    font-size: ${({ theme }) => theme.fontSizes[15]};
    line-height: 1.7;
  }

  @media ${({ theme }) => theme.breakpoints.tabletSm} {
    align-items: flex-start;

    > h3 {
      text-align: left;
    }
  }

  @media ${({ theme }) => theme.breakpoints.tabletSm} {
    border-right: 1px solid ${({ theme }) => theme.colors.stone[300]};
    border-bottom: 0;
    padding: 0 25px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  height: 150px;
  width: 100%;
  justify-content: center;
  overflow: hidden;
  position: relative;

  > img {
    position: absolute;
  }
`;

export const Container = styled.div`
  border-left: 1px solid ${({ theme }) => theme.colors.stone[300]};
  padding: 0 25px;
  width: 30%;
  display: none;

  strong {
    font-family: 'Uni Sans Book', sans-serif;
    font-size: ${({ theme }) => theme.fontSizes[18]};
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes[15]};
    line-height: 1.5;
    margin: 5px 0 15px;
  }

  > div {
    align-items: center;
    column-gap: 20px;
    display: flex;
    padding: 25px 0;
  }

  @media ${({ theme }) => theme.breakpoints.desktopSm} {
    display: block;
  }
`;
