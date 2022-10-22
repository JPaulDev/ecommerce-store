import styled, { css } from 'styled-components';

const flexStyles = css`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const textStyles = css`
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  text-align: center;
`;

export const ListItem = styled.li`
  background-color: white;
  border: 1px solid var(--color-grey-9);
  border-radius: 10px;
  flex-direction: column;
  height: 100%;
  padding: 20px;
  ${flexStyles}

  img {
    height: auto;
    width: 150px;
  }

  @media screen and (min-width: 570px) {
    min-height: 510px;
  }

  @media screen and (max-width: 1109.98px) {
    :nth-child(4n) {
      display: none;
    }
  }
`;

export const ProductName = styled.p`
  -webkit-line-clamp: 2;
  margin: 5px 0 10px;
  ${textStyles}

  @media screen and (min-width: 570px) {
    margin: 5px 0 auto;
  }
`;

export const ProductDescription = styled.p`
  -webkit-line-clamp: 3;
  color: var(--color-grey-8);
  font-size: 0.88rem;
  margin-top: 10px;
  ${textStyles}
`;

export const Wrapper = styled.div`
  border-bottom: 2px solid #d2d6d6;
  margin: 5px 0;
  padding-bottom: 10px;
  width: 100%;
  ${flexStyles}
`;
