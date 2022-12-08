import styled from 'styled-components';

export const Section = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const Heading = styled.h1`
  font-family: 'Uni Sans', sans-serif;
  font-size: var(--font-size-34);
  font-weight: var(--font-weight-medium);
  margin-bottom: 15px;
`;

export const Container = styled.div`
  --border-color: var(--color-grey-10);

  background-color: white;
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  min-height: 600px;
  width: min(800px, 100%);

  @media screen and (min-width: 650px) {
    flex-direction: row;
  }
`;

export const List = styled.ul`
  border-bottom: 1px solid var(--border-color);
  display: flex;
  list-style: none;

  li {
    flex-grow: 1;
  }

  li + li {
    border-left: 1px solid var(--border-color);
  }

  @media screen and (min-width: 650px) {
    border-right: 1px solid var(--border-color);
    border-bottom: initial;
    flex-direction: column;

    li {
      flex-grow: initial;
    }

    li + li {
      border-left: initial;
    }
  }
`;

export const Button = styled.button`
  border-bottom: 3px solid transparent;
  cursor: pointer;
  font-size: var(--font-size-16);
  letter-spacing: 0.4px;
  padding: 20px;
  text-shadow: ${(props) =>
    props.isActive && '-0.05ex 0 0 currentColor, 0.05ex 0 0 currentColor'};
  width: 100%;

  &:hover {
    background-color: var(--color-grey-15);
    border-color: var(--border-color);
  }

  && {
    background-color: ${({ isActive }) => isActive && 'white'};
    border-color: ${({ isActive }) => isActive && 'var(--color-grey-4)'};
  }

  @media screen and (min-width: 650px) {
    border-bottom: initial;
    border-left: 3px solid transparent;
    text-align: left;
    min-width: 220px;
  }
`;

export const RightContainer = styled.div`
  padding: 40px;
  width: 100%;
`;
