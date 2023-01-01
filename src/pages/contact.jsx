import Head from 'next/head';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { CircleQuestion, Headset, Phone } from '../components/icons';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | PC Connect</title>
      </Head>
      <Section>
        <TopContainer>
          <h1>How to contact us</h1>
          <p>
            We would like to make the process of getting in touch with us as
            simple as possible. Below you will find full details of the various
            contact methods available to you.
          </p>

          <Container>
            <p>Call our 7 DAY technical support line on</p>
            <div>
              <Phone width={28} height={28} />
              <strong>01782-444455</strong>
            </div>
          </Container>

          <ul>
            <li>
              <Link href="/" passHref>
                <StyledLink>
                  <Headset width={32} height={32} />
                  <span>Live Chat</span>
                </StyledLink>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <StyledLink>
                  <Phone width={28} height={28} />
                  <span>Call Back</span>
                </StyledLink>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <StyledLink>
                  <CircleQuestion width={28} height={28} />
                  <span>Online Query</span>
                </StyledLink>
              </Link>
            </li>
          </ul>
        </TopContainer>

        <Divider />

        <BottomContainer>
          <h2>Where to find us</h2>
          <iframe
            title="Google Maps"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAxAwupW19ycnYSDTHx7YbS9Skx2icy2m4&q=ST59EN"
          />
        </BottomContainer>
      </Section>
    </>
  );
}

const containerMixin = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const headingMixin = css`
  font-family: 'Uni Sans', sans-serif;
  font-size: ${({ theme }) => theme.fontSizes[36]};
  font-weight: 600;
`;

const Section = styled.section`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.stone[200]};
  padding: 50px 30px;
`;

const TopContainer = styled.div`
  ${containerMixin}

  > h1 {
    ${headingMixin}
    margin-bottom: 15px;
  }

  > p {
    font-size: ${({ theme }) => theme.fontSizes[15]};
  }

  > ul {
    list-style: none;
    display: flex;
    column-gap: 10px;
  }
`;

const Container = styled.div`
  display: flex;
  margin: 50px 0;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes[24]};
  font-family: 'Uni Sans', sans-serif;
  gap: 10px;
  flex-wrap: wrap;

  > div {
    display: flex;
    column-gap: 10px;
  }
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  padding: 15px 20px;
  font-weight: 600;
  color: black;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[200]};
  }

  @media ${({ theme }) => theme.breakpoints.mobileLg} {
    font-size: ${({ theme }) => theme.fontSizes[18]};
  }

  @media ${({ theme }) => theme.breakpoints.desktopXs} {
    padding: 25px 40px;
    flex-direction: row;
  }
`;

const Divider = styled.div`
  width: min(100%, 800px);
  height: 2px;
  background-color: ${({ theme }) => theme.colors.stone[300]};
  margin: 60px auto 50px;
`;

const BottomContainer = styled.div`
  ${containerMixin}

  > h2 {
    ${headingMixin}
    margin-bottom: 25px;
  }

  > iframe {
    border: 1px solid ${({ theme }) => theme.colors.stone[300]};
    width: min(100%, 800px);
    height: 450px;
  }
`;
