import styled, { css } from 'styled-components';

const headingMixin = css`
  font-family: 'Uni Sans Book', sans-serif;
  text-align: center;
`;

export const Section = styled.section`
  background-color: white;
  border: 1px solid var(--color-grey-12);
  display: flex;
  margin-top: 15px;
  padding: 15px 25px 20px;

  @media screen and (min-width: 650px) {
    padding: 30px 0;
  }
`;

export const Articles = styled.article`
  @media screen and (min-width: 1050px) {
    width: 68%;
  }
`;

export const Heading = styled.h2`
  font-size: var(--font-size-30);
  ${headingMixin}

  @media screen and (min-width: 650px) {
    text-align: left;
    margin-bottom: ${({ marginBottom }) => marginBottom};
    margin-left: ${({ marginLeft }) => marginLeft};
  }
`;

export const FlexContainer = styled.div`
  display: flex;

  & :last-child {
    border: 0;
    padding-bottom: 0;
  }

  @media screen and (max-width: 649px) {
    flex-direction: column;
  }
`;

export const Article = styled.article`
  border-bottom: 1px solid var(--color-grey-11);
  flex: 1 1 250px;
  padding-bottom: 20px;

  @media screen and (max-width: 649px) {
    a {
      justify-content: center;
    }
  }

  @media screen and (min-width: 650px) {
    border-right: 1px solid var(--color-grey-11);
    border-bottom: 0;
    padding: 0 25px;
  }
`;

export const ArticleHeading = styled.h3`
  font-size: var(--font-size-18);
  margin-top: 15px;
  ${headingMixin}

  @media screen and (min-width: 650px) {
    min-height: 50px;
    text-align: left;
    margin: 0;
  }
`;

export const ArticleText = styled.p`
  font-size: var(--font-size-14);
  line-height: 1.7;
  margin: 10px 0;

  @media screen and (min-width: 650px) {
    text-align: left;
    margin-top: 15px;
  }
`;

export const Date = styled.time`
  color: var(--color-grey-4);
  display: block;
  font-size: var(--font-size-13);
  margin-bottom: 15px;

  @media screen and (max-width: 649px) {
    margin-bottom: 8px;
    text-align: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  height: 150px;
  justify-content: center;
  overflow: hidden;
  position: relative;

  img {
    position: absolute;
  }
`;

export const RightContainer = styled.div`
  border-left: 1px solid var(--color-grey-11);
  flex: 1;
  padding: 0 25px;

  @media screen and (max-width: 1049px) {
    display: none;
  }
`;

export const Title = styled.strong`
  font-family: 'Uni Sans Book', sans-serif;
  font-size: var(--font-size-18);
`;

export const Text = styled.p`
  font-size: var(--font-size-14);
  line-height: 1.5;
  margin: 6px 0 15px;
`;

export const Container = styled.div`
  align-items: center;
  column-gap: 20px;
  display: flex;
  padding: 25px 0;
`;
