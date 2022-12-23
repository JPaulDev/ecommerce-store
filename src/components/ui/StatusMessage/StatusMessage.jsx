import styled from 'styled-components';
import { Warning } from '../../icons';

export default function StatusMessage({ children, ...rest }) {
  return (
    <Container role="alert" {...rest}>
      <Warning width={21} height={21} />
      <Text>{children}</Text>
    </Container>
  );
}

export const Container = styled.div`
  --spacing: 10px;

  column-gap: var(--spacing);
  padding: var(--spacing);
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.red[600]};
  display: flex;

  > svg {
    fill: ${({ theme }) => theme.colors.red[600]};
    flex-shrink: 0;
  }
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.red[600]};
  font-size: ${({ theme }) => theme.fontSizes[13]};
  font-weight: 600;
  text-align: left;
`;
