import styled from 'styled-components';

export const Section = styled.section`
  background-color: white;
  border: 1px solid var(--color-grey-9);
  display: grid;
  gap: 6px;
  margin-top: 15px;
  padding: 6px;

  @media screen and (min-width: 780px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ProCard = styled.div`
  background-color: #f1f1f1;
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
  color: #0072bc;
  font-family: 'Uni Sans Book', sans-serif;
  font-size: 1.7rem;
  font-weight: 400;
  line-height: 0.8;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  color: var(--color-grey-8);
  font-size: 0.9rem;
  margin-bottom: 10px;
  width: 60%;
`;
