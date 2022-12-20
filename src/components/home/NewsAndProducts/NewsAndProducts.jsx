import Image from 'next/future/image';
import hotSellers from '../../../../public/images/news-and-products/hot-sellers.webp';
import newArrivals from '../../../../public/images/news-and-products/new-arrivals.webp';
import { LinkButton, LinkChevron } from '../../ui';
import ARTICLES_DATA from './articles-data';
import * as Styled from './styles';

export default function NewsAndProducts() {
  const linkText = 'View All';

  return (
    <Styled.Section>
      <article>
        <Styled.Heading marginBottom="15px" marginLeft="25px">
          Tech news & articles
        </Styled.Heading>
        <Styled.ArticlesContainer>
          {ARTICLES_DATA.map((article) => (
            <Styled.Article key={article.title}>
              <h3>{article.title}</h3>
              <time dateTime={article.dateTime}>{article.date}</time>
              <Styled.Wrapper>
                <Image src={article.image} alt="" />
              </Styled.Wrapper>
              <p>{article.text}</p>
              <LinkChevron href={article.href} fontSize={13} iconSize={18}>
                Read Full Article
              </LinkChevron>
            </Styled.Article>
          ))}
        </Styled.ArticlesContainer>
      </article>

      <Styled.Container>
        <Styled.Heading>Hot & New products</Styled.Heading>
        <p>Check out our latest and greatest.</p>
        <div>
          <Image
            src={hotSellers}
            alt="An xbox gaming controller and an iPad."
          />
          <div>
            <strong>Our Hot Sellers</strong>
            <p>See our most popular selling products.</p>
            <LinkButton href="/" color="black">
              {linkText}
            </LinkButton>
          </div>
        </div>
        <div>
          <Image
            src={newArrivals}
            alt="A widescreen computer monitor and virtual reality headset."
          />
          <div>
            <strong>Our Latest Arrivals</strong>
            <p>
              When the competition wants to see what&lsquo;s new they check our
              website!
            </p>
            <LinkButton href="/" color="black">
              {linkText}
            </LinkButton>
          </div>
        </div>
      </Styled.Container>
    </Styled.Section>
  );
}
