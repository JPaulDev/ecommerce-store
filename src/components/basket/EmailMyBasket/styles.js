import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--color-grey-6);
  border: 1px solid var(--color-grey-9);
  font-size: 0.75rem;
  margin-top: 25px;
  padding: 20px 30px 30px;
`;

export const Heading = styled.h2`
  border-bottom: 1px solid var(--color-grey-10);
  font-family: 'Uni Sans', sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 15px;
  padding: 11px 0;

  @media screen and (max-width: 899px) {
    text-align: center;
  }
`;

export const Input = styled.input`
  border: 1px solid #767676;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  padding: 10px;
  width: 70%;
`;

export const Button = styled.button`
  background: linear-gradient(to top, #1463a2, #3a7fbf);
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  color: white;
  cursor: pointer;
  font-weight: 700;
  padding: 11px 15px;
  text-transform: uppercase;
  width: 30%;

  &:hover {
    background: linear-gradient(to top, #105891, #1463a2);
  }
`;

export const CheckboxContainer = styled.div`
  align-items: center;
  display: flex;
  font-size: 0.82rem;
  margin: 20px 0;
`;

export const Checkbox = styled.input`
  flex-shrink: 0;
  height: 20px;
  margin-right: 10px;
  width: 20px;
`;

export const Link = styled.a`
  color: var(--color-blue-1);
  font-weight: 700;
  margin-left: 5px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
