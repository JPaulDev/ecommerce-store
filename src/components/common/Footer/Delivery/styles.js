import styled from 'styled-components';

export const Container = styled.div`
  @media screen and (min-width: 650px) {
    margin-bottom: 30px;
    margin-right: 30px;
  }

  @media screen and (min-width: 860px) {
    margin-right: 50px;
  }

  @media screen and (min-width: 1050px) {
    margin: 0;
  }
`;

export const Text = styled.p`
  color: var(--color-grey-8);
  font-size: 0.82rem;
  margin: 8px 0 8px 20px;

  @media screen and (min-width: 650px) {
    margin: 8px 0;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const TabButton = styled.button`
  background-color: ${({ active }) =>
    active ? 'var(--color-grey-11)' : '#dedede'};
  border-bottom: ${({ active }) =>
    active ? '3px solid var(--color-orange-1)' : '3px solid #dedede'};
  cursor: pointer;
  flex: 1;
  font-weight: 600;
  padding: 8px;
  transition: all 200ms ease-in-out;
`;

export const Form = styled.form`
  align-items: center;
  background-color: var(--color-grey-11);
  border-bottom: 1px solid var(--color-grey-10);
  display: flex;
  padding: 20px 15px;

  @media screen and (max-width: 649px) {
    justify-content: center;
  }
`;

export const Input = styled.input`
  border: 1px solid grey;
  border-radius: 5px;
  margin-right: 8px;
  max-width: 175px;
  padding: 8px 0 8px 10px;
  width: 40%;
`;

export const SubmitButton = styled.button`
  align-items: center;
  background: var(--color-grey-1);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 32px;
  justify-content: center;
  width: 32px;

  &:active {
    transform: scale(0.9);
  }
`;
