import Image from 'next/future/image';
import Head from 'next/head';
import styled from 'styled-components';
import image404 from '../../public/images/404/404-error.webp';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404: Page Not Found</title>
      </Head>
      <Section>
        <Image src={image404} alt="" quality={85} priority="true" />
        <h1>Not Found</h1>
        <p>
          The requested page doesn&lsquo;t exist or you don&lsquo;t have access
          to it.
        </p>
      </Section>
    </>
  );
}

const Section = styled.section`
  align-items: center;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.stone[200]};
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSizes[18]};
  justify-content: center;
  min-height: 600px;
  padding: 30px;
  text-align: center;
  row-gap: 10px;

  > img {
    height: auto;
    max-width: 100%;
  }

  > h1 {
    font-family: 'Uni Sans', sans-serif;
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes[32]};
  }
`;
