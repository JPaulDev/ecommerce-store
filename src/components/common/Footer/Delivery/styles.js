import styled, { css } from 'styled-components';

export const Container = styled.div`
  p {
    color: ${({ theme }) => theme.colors.stone[600]};
    font-size: ${({ theme }) => theme.fontSizes[13]};
    margin: 10px 0 10px 20px;
  }

  @media ${({ theme }) => theme.breakpoints.tabletSm} {
    margin-right: 30px;

    p {
      margin: 10px 0;
    }
  }

  @media ${({ theme }) => theme.breakpoints.desktopXs} {
    margin-right: 40px;
  }

  @media ${({ theme }) => theme.breakpoints.desktopSm} {
    margin: 0;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.neutral[300] : '#ddd'};
  cursor: pointer;
  flex: 1;
  border-bottom: 3px solid
    ${({ theme, isActive }) =>
      isActive ? theme.colors.sky[600] : 'transparent'};
  font-weight: 600;
  padding: 10px;
`;

export const Form = styled.form`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.neutral[300]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.stone[400]};
  display: flex;
  gap: 10px;
  justify-content: center;
  padding: 20px 15px;

  @media ${({ theme }) => theme.breakpoints.tabletSm} {
    justify-content: left;
  }

  @media ${({ theme }) => theme.breakpoints.desktopMd} {
    padding: 20px 30px;
  }
`;

export const inputStyles = css`
  border: 1px solid ${({ theme }) => theme.colors.stone[400]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  max-width: 175px;
  outline: none;
  padding: 8px;
  width: 40%;

  &:focus {
    border-color: ${({ theme }) => theme.colors.stone[700]};
  }
`;

export const SubmitButton = styled.button`
  --size: 32px;

  height: var(--size);
  width: var(--size);
  align-items: center;
  background-color: ${({ theme }) => theme.colors.stone[700]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:active {
    transform: scale(0.9);
  }
`;
