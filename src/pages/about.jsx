import Image from 'next/future/image';
import Head from 'next/head';
import styled from 'styled-components';
import banner from '../../public/images/about/header-banner.webp';
import { Headset, Heart, Screwdriver } from '../components/icons';

export default function About() {
  return (
    <>
      <Head>
        <title>About | PC Connect</title>
      </Head>
      <Section>
        <h1>About us</h1>
        <ImageContainer>
          <h2>Welcome to our world</h2>
          <Image src={banner} alt="" priority="true" quality={90} />
        </ImageContainer>
        <Container>
          <p>
            Welcome to our PC component shop! We specialize in providing
            high-quality computer parts and accessories to help you build or
            upgrade your own personal computer. Our inventory includes a wide
            range of components such as processors, graphics cards,
            motherboards, RAM, and storage solutions. We also carry a variety of
            peripherals including monitors, keyboards, mice, and headphones to
            enhance your overall computing experience. Our team of knowledgeable
            and friendly staff is dedicated to helping you find the right parts
            for your specific needs. Whether you are a seasoned builder or new
            to the world of PC customization, we are here to assist you every
            step of the way. In addition to our diverse selection of products,
            we also offer expert installation services and technical support to
            ensure that your new components are properly set up and functioning
            at their best. Thank you for choosing our shop for all of your PC
            component needs. We look forward to helping you build the perfect
            system!
          </p>
          <InnerContainer>
            <div>
              <Screwdriver width={60} height={60} />
              <strong>Specification</strong>
              <p>
                What we know. Inside out. Computers, Components, Gaming, Audio,
                Video, Graphics, HPC, AI, Cloud and Digital Signage. We build
                bespoke computer systems for them all - inspired by our
                experience.
              </p>
            </div>
            <div>
              <Headset width={60} height={60} />
              <strong>Services</strong>
              <p>
                How we do things. People-focused. Going the extra mile.
                Passionate about giving people what they need. Build
                relationships and nurture loyalty. Speed. On-time deliveries.
              </p>
            </div>
            <div>
              <Heart width={60} height={60} />
              <strong>Satisfaction</strong>
              <p>
                What sets us apart. Our depth of understanding and guidance.
                Innovative and visionary sourcing. Award-winning service and
                custom builds. The reasons people keep coming back.
              </p>
            </div>
          </InnerContainer>
        </Container>
      </Section>
    </>
  );
}

const Section = styled.section`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.stone[200]};
  padding: 30px 0 80px;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

  > h1 {
    font-family: 'Uni Sans', sans-serif;
    font-size: ${({ theme }) => theme.fontSizes[40]};
    font-weight: 600;
    margin-bottom: 30px;
  }
`;

const ImageContainer = styled.div`
  border-top: 10px solid ${({ theme }) => theme.colors.sky[700]};
  width: 100%;
  position: relative;

  > img {
    display: block;
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  > h2 {
    font-family: 'Uni Sans', sans-serif;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: ${({ theme }) => theme.fontSizes[36]};
  }

  @media ${({ theme }) => theme.breakpoints.desktopXs} {
    > img {
      height: 300px;
    }
  }
`;

const Container = styled.div`
  max-width: 1100px;

  > p {
    line-height: 1.5;
    padding: 60px 30px;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
    padding: 0 30px;
  }

  svg {
    fill: ${({ theme }) => theme.colors.sky[700]};
  }

  p {
    line-height: 1.5;
    font-size: ${({ theme }) => theme.fontSizes[14]};
  }

  @media ${({ theme }) => theme.breakpoints.tabletSm} {
    flex-direction: row;

    > div + div {
      border-left: 1px solid ${({ theme }) => theme.colors.stone[300]};
    }
  }
`;
