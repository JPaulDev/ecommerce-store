import styled from 'styled-components';

export const Text = styled.p`
  margin-bottom: 10px;
`;

export const ForgotPasswordBtn = styled.button`
  cursor: pointer;
  font-size: inherit;

  &:hover {
    text-decoration: underline;
  }
`;

export const Divider = styled.div`
  align-items: center;
  display: flex;
  font-size: var(--font-size-13);
  justify-content: center;
  margin: 10px 0 20px;
  position: relative;

  span {
    background-color: white;
    color: var(--color-grey-4);
    font-weight: var(--font-weight-semibold);
    padding: 0 10px;
    z-index: 10;
  }

  &::after {
    background-color: var(--color-grey-10);
    content: '';
    height: 2px;
    position: absolute;
    width: 100%;
  }
`;
