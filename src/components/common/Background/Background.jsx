import Image from 'next/future/image';
import styled from 'styled-components';
import basket from '../../../../public/images/page-backgrounds/basket.webp';
import home from '../../../../public/images/page-backgrounds/home.webp';

const backgrounds = { home, basket };

// If no background image is passed in, the default background colors are used.
export default function Background({ backgroundImage }) {
  return (
    <Container>
      <StyledBackground>
        {backgroundImage && (
          <Image
            src={backgrounds[backgroundImage]}
            alt=""
            quality={85}
            priority="true"
          />
        )}
      </StyledBackground>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1000;
`;

const StyledBackground = styled.div`
  --center-color: ${({ theme }) => theme.colors.neutral[100]};

  background-image: linear-gradient(var(--center-color), var(--center-color));
  background-color: #e2e2e2;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 1294px 100%;
  display: flex;
  height: 100vh;
  justify-content: center;
  overflow: hidden;
  position: sticky;
  top: 0;

  @media screen and (max-width: 1310px) {
    > img {
      display: none;
    }
  }
`;
