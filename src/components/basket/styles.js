import styled, { css } from 'styled-components';

export const containerMixin = css`
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  border: 1px solid ${({ theme }) => theme.colors.stone[300]};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  padding: 30px;
`;

export const headingMixin = css`
  border-bottom: 1px solid ${({ theme }) => theme.colors.stone[300]};
  font-family: 'Uni Sans', sans-serif;
  font-size: ${({ theme }) => theme.fontSizes[24]};
  font-weight: 600;
  text-align: center;

  @media ${({ theme }) => theme.breakpoints.desktopXs} {
    text-align: left;
  }
`;

export const Heading = styled.h2`
  ${headingMixin}
  margin-bottom: 15px;
  padding-bottom: 10px;
`;
