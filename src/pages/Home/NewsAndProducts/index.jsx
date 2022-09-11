import useMediaQuery from '../../../hooks/useMediaQuery';
import hotSellers from '../../../assets/images/news-and-products/hot-sellers.webp';
import newArrivals from '../../../assets/images/news-and-products/new-arrivals.webp';
import articles from './articles';
import LinkWithChevron from '../../../components/LinkWithChevron';
import LinkButtonGrey from '../../../components/LinkButtonGrey';
import * as Styled from './styles';

export default function NewsAndProducts() {
  const isMatch = useMediaQuery('(min-width: 1050px)');

  return (
    <Styled.Section>
      <Styled.LeftContainer>
        <Styled.Heading marginBottom="20px" marginLeft="23px">
          Tech news & articles
        </Styled.Heading>
        <Styled.NewsContainer>
          {articles.map((article) => (
            <Styled.ArticleBlock key={article.title}>
              <Styled.ArticleHeading>{article.title}</Styled.ArticleHeading>
              <Styled.Date>{article.date}</Styled.Date>
              <Styled.Image
                src={article.image}
                width={630}
                height={150}
                alt=""
              />
              <Styled.Article>{article.text}</Styled.Article>
              <LinkWithChevron
                url={article.url}
                text="Read Full Article"
                fontSize="0.8rem"
                iconSize="21px"
              />
            </Styled.ArticleBlock>
          ))}
        </Styled.NewsContainer>
      </Styled.LeftContainer>
      {isMatch && (
        <Styled.RightContainer>
          <Styled.Heading>Hot & New products</Styled.Heading>
          <Styled.Text>Check out our latest and greatest.</Styled.Text>
          <Styled.Container>
            <img
              src={hotSellers}
              width={96}
              height={76}
              alt="An xbox gaming controller and an ipad"
            />
            <div>
              <Styled.Title>Our Hot Sellers</Styled.Title>
              <Styled.Text>See our most popular selling products.</Styled.Text>
              <LinkButtonGrey href="" padding="12px 14px">
                View All
              </LinkButtonGrey>
            </div>
          </Styled.Container>
          <Styled.Container>
            <img
              src={newArrivals}
              width={96}
              height={80}
              alt="A widescreen computer monitor and virtual reality headset"
            />
            <div>
              <Styled.Title>Our Latest Arrivals</Styled.Title>
              <Styled.Text>
                When the competition wants to see what&lsquo;s new they check
                our website!
              </Styled.Text>
              <LinkButtonGrey href="" padding="12px 14px">
                View All
              </LinkButtonGrey>
            </div>
          </Styled.Container>
        </Styled.RightContainer>
      )}
    </Styled.Section>
  );
}
