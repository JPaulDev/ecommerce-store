import * as Styled from './styles';

export default function PartNumber({ fontSize, sku }) {
  return <Styled.PartNumber $fontSize={fontSize}>{sku}</Styled.PartNumber>;
}