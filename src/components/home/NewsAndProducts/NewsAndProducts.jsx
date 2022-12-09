import Image from 'next/future/image';
import hotSellers from '../../../../public/images/news-and-products/hot-sellers.webp';
import newArrivals from '../../../../public/images/news-and-products/new-arrivals.webp';
import { LinkChevron, LinkButton } from '../../ui';
import articles from './articles';
import * as Styled from './styles';

export default function NewsAndProducts() {
  const linkText = 'View All';

  return (
    <Styled.Section>
      <Styled.Articles>
        <Styled.Heading marginBottom="20px" marginLeft="23px">
          Tech news & articles
        </Styled.Heading>
        <Styled.FlexContainer>
          {articles.map((article) => (
            <Styled.Article key={article.title}>
              <Styled.ArticleHeading>{article.title}</Styled.ArticleHeading>
              <Styled.Date dateTime={article.dateTime}>
                {article.date}
              </Styled.Date>
              <Styled.Wrapper>
                <Image src={article.image} alt="" />
              </Styled.Wrapper>
              <Styled.ArticleText>{article.text}</Styled.ArticleText>
              <LinkChevron href={article.href} fontSize={13} iconSize={21}>
                Read Full Article
              </LinkChevron>
            </Styled.Article>
          ))}
        </Styled.FlexContainer>
      </Styled.Articles>
      <Styled.RightContainer>
        <Styled.Heading>Hot & New products</Styled.Heading>
        <Styled.Text>Check out our latest and greatest.</Styled.Text>
        <Styled.Container>
          <Image
            src={hotSellers}
            alt="An xbox gaming controller and an iPad."
          />
          <div>
            <Styled.Title>Our Hot Sellers</Styled.Title>
            <Styled.Text>See our most popular selling products.</Styled.Text>
            <LinkButton href="/">
              {linkText}
            </LinkButton>
          </div>
        </Styled.Container>
        <Styled.Container>
          <Image
            src={newArrivals}
            alt="A widescreen computer monitor and virtual reality headset."
          />
          <div>
            <Styled.Title>Our Latest Arrivals</Styled.Title>
            <Styled.Text>
              When the competition wants to see what&lsquo;s new they check our
              website!
            </Styled.Text>
            <LinkButton href="/">
              {linkText}
            </LinkButton>
          </div>
        </Styled.Container>
      </Styled.RightContainer>
    </Styled.Section>
  );
}
