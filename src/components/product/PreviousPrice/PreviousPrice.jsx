import styled from 'styled-components';

export default function PreviousPrice({ children, fontSize = 16 }) {
  return (
    <Text $fontSize={fontSize}>
      <span>Was: </span>
      {children}
    </Text>
  );
}

const Text = styled.div`
  color: ${({ theme }) => theme.colors.stone[400]};
  font-size: ${({ theme, $fontSize }) => theme.fontSizes[$fontSize]};
  text-decoration: line-through;

  > span {
    font-size: 0.9em;
    font-weight: 600;
  }
`;
