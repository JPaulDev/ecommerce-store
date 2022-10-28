import styled from 'styled-components';

export const Section = styled.section`
  background-color: white;
  border: 1px solid var(--color-grey-12);
  display: grid;
  gap: 6px;
  margin-top: 15px;
  padding: 6px;

  @media screen and (min-width: 780px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ProCard = styled.div`
  background-color: var(--color-grey-14);
  background-image: url(${({ image }) => image});
  background-position: right;
  background-repeat: no-repeat;
  min-height: 125px;
  padding-left: 25px;
  padding-top: 25px;

  @media screen and (min-width: 780px) {
    min-height: 140px;
  }

  @media screen and (min-width: 990px) {
    min-height: 175px;
  }
`;

export const ProLogo = styled.div`
  background-image: url(${({ logo }) => logo});
  background-position-x: ${({ logoPosition }) => logoPosition};
  background-repeat: no-repeat;
  height: 18px;
  margin-bottom: 10px;
  width: 170px;
`;

export const Heading = styled.h4`
  color: var(--color-blue-4);
  font-family: 'Uni Sans Book', sans-serif;
  font-size: var(--font-size-26);
  font-weight: var(--font-weight-regular);
  line-height: 0.8;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  color: var(--color-grey-4);
  font-size: var(--font-size-14);
  line-height: 1.5;
  margin-bottom: 10px;
  width: 60%;

  @media screen and (max-width: 989px) {
    display: none;
  }
`;
