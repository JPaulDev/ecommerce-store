import styled, { css } from 'styled-components';

const transitionMixin = css`
  transform: ${({ isOpen }) => (isOpen ? 'rotate(-90deg)' : 'rotate(90deg)')};
  transition: transform 600ms step-end;
`;

export const TopContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid ${({ theme }) => theme.colors.stone[200]};
  padding-bottom: 15px;
  column-gap: 35px;

  > h1 {
    font-family: 'Uni Sans', sans-serif;
    font-size: ${({ theme }) => theme.fontSizes[30]};
  }
`;

export const TopButton = styled.button`
  ${transitionMixin}
  cursor: pointer;
  font-size: 0;

  @media ${({ theme }) => theme.breakpoints.tabletSm} {
    display: none;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  margin-top: 15px;
  column-gap: 35px;
  justify-content: space-between;

  > h2 {
    font-family: 'Uni Sans', sans-serif;
    font-size: ${({ theme }) => theme.fontSizes[22]};
    font-weight: 600;
  }

  @media ${({ theme }) => theme.breakpoints.tabletSm} {
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 5px 20px;

    > h2 {
      line-height: 1;
    }
  }
`;

export const BottomButton = styled.button`
  cursor: pointer;
  font-size: 0;
  align-items: center;
  display: flex;
  font-weight: 700;
  text-transform: uppercase;

  > svg {
    ${transitionMixin}
    height: auto;
    width: 15px;
  }

  &:hover {
    text-decoration: underline;
  }

  @media ${({ theme }) => theme.breakpoints.tabletSm} {
    column-gap: 7px;
    color: ${({ theme }) => theme.colors.sky[700]};
    font-size: ${({ theme }) => theme.fontSizes[13]};

    > svg {
      width: 10px;
    }
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.stone[600]};
  line-height: 1.7;
  padding-top: 15px;
`;
