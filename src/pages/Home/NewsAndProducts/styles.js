import styled from 'styled-components';

export const Section = styled.section`
  background-color: white;
  border: 1px solid var(--color-grey-9);
  display: flex;
  margin-top: 15px;
  padding: 15px 25px 20px;

  @media screen and (min-width: 650px) {
    padding: 30px 0;
  }
`;

export const LeftContainer = styled.div`
  @media screen and (min-width: 1050px) {
    width: 68%;
  }
`;

export const Heading = styled.h2`
  font-family: 'Uni Sans', sans-serif;
  font-size: 1.88rem;
  text-align: center;

  @media screen and (min-width: 650px) {
    text-align: left;
    margin-bottom: ${({ marginBottom }) => marginBottom};
    margin-left: ${({ marginLeft }) => marginLeft};
  }
`;

export const NewsContainer = styled.div`
  display: flex;

  & :last-child {
    border: 0;
    padding-bottom: 0;
  }

  @media screen and (max-width: 649px) {
    flex-direction: column;
  }
`;

export const ArticleBlock = styled.div`
  border-bottom: 1px solid #ddd;
  flex: 1 1 250px;
  padding-bottom: 20px;

  @media screen and (max-width: 649px) {
    a {
      justify-content: center;
    }
  }

  @media screen and (min-width: 650px) {
    border-right: 1px solid #ddd;
    border-bottom: 0;
    padding: 0 25px;
  }
`;

export const ArticleHeading = styled.h3`
  font-family: 'Uni Sans Book', sans-serif;
  font-size: 1.13rem;
  margin-top: 15px;
  text-align: center;

  @media screen and (min-width: 650px) {
    min-height: 50px;
    text-align: left;
    margin: 0;
  }
`;

export const Article = styled.article`
  font-size: 0.88rem;
  line-height: 1.7;
  margin: 10px 0;

  @media screen and (min-width: 650px) {
    text-align: left;
    margin-top: 15px;
  }
`;

export const Date = styled.div`
  color: var(--color-grey-8);
  font-size: 0.81rem;
  margin-bottom: 15px;

  @media screen and (max-width: 649px) {
    margin-bottom: 8px;
    text-align: center;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
`;

export const RightContainer = styled.div`
  border-left: 1px solid var(--color-grey-9);
  flex: 1;
  padding: 0 25px;
`;

export const Title = styled.strong`
  font-family: 'Uni Sans Book', sans-serif;
  font-size: 1.06rem;
`;

export const Text = styled.p`
  font-size: 0.88rem;
  margin: 6px 0 15px;
`;

export const Container = styled.div`
  align-items: center;
  column-gap: 18px;
  display: flex;
  padding: 25px 0;
`;
