import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid var(--color-grey-9);
  overflow: hidden;
`;

export const Container = styled.div`
  align-items: center;
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  min-height: 510px;
  min-width: 240px;
  padding: 20px;
`;

export const ImageWrapper = styled.div`
  img {
    display: block;
    height: auto;
    width: 150px;
  }
`;

export const ProductName = styled.p`
  font-size: 0.94rem;
  font-weight: 600;
  margin: 5px 0 10px;
  text-align: center;
`;

export const ProductDescription = styled.p`
  color: var(--color-grey-8);
  font-size: 0.88rem;
  text-align: center;
`;

export const PartNumberWrapper = styled.div`
  border-bottom: 2px solid #d2d6d6;
  display: flex;
  justify-content: center;
  margin: 5px 0;
  padding-bottom: 13px;
  width: 100%;
`;
