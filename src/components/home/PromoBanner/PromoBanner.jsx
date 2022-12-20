import Image from 'next/future/image';
import styled from 'styled-components';
import blueDetail from '../../../../public/images/promo-banner/blue-detail.webp';
import nvidiaLogo from '../../../../public/images/promo-banner/nvidia-logo.webp';
import nvidiaImage from '../../../../public/images/promo-banner/rtx-studio.webp';
import { LinkButton, LinkChevron, ResponsiveBox } from '../../ui';

export default function PromoBanner() {
  const linkText = 'Find Out More';

  return (
    <Container background={nvidiaImage.src}>
      <strong>RTX Studio</strong>
      <p>The best laptops and desktops for creating anywhere.</p>
      <ResponsiveBox sx={{ display: { mobileXs: 'none', tablet: 'block' } }}>
        <LinkButton href="/" color="black">
          {linkText}
        </LinkButton>
      </ResponsiveBox>
      <ResponsiveBox sx={{ display: { mobileXs: 'block', tablet: 'none' } }}>
        <LinkChevron href="/" fontSize={13} iconSize={18}>
          {linkText}
        </LinkChevron>
      </ResponsiveBox>
      <Image className="nvidia-logo" src={nvidiaLogo} alt="" />
      <Image className="blue-detail" src={blueDetail} alt="" />
    </Container>
  );
}

const Container = styled.div`
  background-color: #ebebeb;
  background-image: url(${({ background }) => background});
  background-position: calc(100% + 220px) center;
  background-repeat: no-repeat;
  background-size: auto 186px;
  border: 1px solid ${({ theme }) => theme.colors.stone[200]};
  margin-top: 15px;
  min-height: 185px;
  overflow: hidden;
  padding: 15px;
  position: relative;

  > strong {
    font-family: 'Uni Sans', sans-serif;
    font-size: ${({ theme }) => theme.fontSizes[30]};
  }

  > p {
    font-family: 'Uni Sans Book', sans-serif;
    line-height: 1.3;
    margin: 10px 0;
    width: 45%;
    letter-spacing: 0.5px;
  }

  .nvidia-logo {
    position: absolute;
    display: none;
    right: 25px;
    top: 25px;
  }

  .blue-detail {
    bottom: -105px;
    position: absolute;
    right: -70px;
  }

  @media ${({ theme }) => theme.breakpoints.mobileLg} {
    padding: 15px 20px;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    background-position: calc(100% + 345px) center;
    background-size: auto 291px;
    min-height: 250px;
    padding: 25px;

    > strong {
      font-size: ${({ theme }) => theme.fontSizes[38]};
    }

    > p {
      font-size: ${({ theme }) => theme.fontSizes[20]};
      width: 35%;
    }

    .blue-detail {
      right: 10px;
    }
  }

  @media ${({ theme }) => theme.breakpoints.desktopXs} {
    background-position: center;

    .nvidia-logo {
      display: block;
    }
  }
`;
