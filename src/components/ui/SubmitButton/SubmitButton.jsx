import styled from 'styled-components';
import LoadingSpinner from '../LoadingSpinner';

export default function SubmitButton({ children, isSubmitting, ...rest }) {
  return (
    <Button type="submit" disabled={isSubmitting} {...rest}>
      {isSubmitting && <LoadingSpinner size={28} />}
      <span>{children}</span>
    </Button>
  );
}

const Button = styled.button`
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.blue[500]},
    ${({ theme }) => theme.colors.indigo[500]}
  );
  box-shadow: ${({ theme }) => theme.boxShadows.md};
  color: white;
  font-weight: 600;
  padding: 12px 25px;
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.lg};

  > span {
    font-size: ${({ theme }) => theme.fontSizes[14]};
  }

  &:disabled {
    > span {
      visibility: hidden;
    }
  }

  &:not(:disabled) {
    cursor: pointer;
  }

  &:not(:disabled):hover {
    box-shadow: inset 0 0 0 100px rgb(0 0 0 / 10%),
      ${({ theme }) => theme.boxShadows.hover};
  }

  &:not(:disabled):active {
    transform: scale(0.96);
  }
`;
