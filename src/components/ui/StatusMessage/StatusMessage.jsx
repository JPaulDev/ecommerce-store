import styled, { css } from 'styled-components';
import { CircleCheck, Warning } from '../../icons';

export default function StatusMessage({ children, variant, ...rest }) {
  return (
    <Container role="alert" variant={variant} {...rest}>
      {variant === 'error' ? (
        <Warning width={21} height={21} />
      ) : (
        <CircleCheck width={21} height={21} />
      )}
      <p>{children}</p>
    </Container>
  );
}

export const Container = styled.div`
  width: 100%;
  column-gap: 10px;
  padding: 10px;
  align-items: center;
  display: flex;

  ${({ theme, variant }) => {
    if (variant === 'error') {
      return css`
        border: 1px solid ${theme.colors.red[600]};
        color: ${theme.colors.red[600]};
      `;
    }

    return css`
      border: 1px solid ${theme.colors.green[600]};
      color: ${theme.colors.green[600]};
    `;
  }}

  > svg {
    flex-shrink: 0;
  }

  > p {
    font-size: ${({ theme }) => theme.fontSizes[13]};
    font-weight: 600;
    text-align: left;
  }
`;
