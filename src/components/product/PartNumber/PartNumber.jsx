import styled from 'styled-components';

export default function PartNumber({ children, fontSize = 16 }) {
  return <Text $fontSize={fontSize}>SKU: {children}</Text>;
}

const Text = styled.div`
  color: ${({ theme }) => theme.colors.sky[700]};
  font-size: ${({ theme, $fontSize }) => theme.fontSizes[$fontSize]};
  font-weight: 700;
  text-transform: uppercase;
`;
