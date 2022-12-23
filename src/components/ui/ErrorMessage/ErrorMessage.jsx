import styled from 'styled-components';
import { Info } from '../../icons';

export default function ErrorMessage({ children, id, ...rest }) {
  return (
    <Text id={id} role="alert" {...rest}>
      <Info width={16} height={16} />
      {children}
    </Text>
  );
}

const Text = styled.p`
  color: ${({ theme }) => theme.colors.red[600]};
  font-size: ${({ theme }) => theme.fontSizes[13]};
  font-weight: 600;
  display: flex;
  align-items: center;
  column-gap: 5px;
`;
