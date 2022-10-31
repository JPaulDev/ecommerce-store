import * as Styled from './styles';

export default function PartNumber({ children, fontSize = 16 }) {
  return <Styled.Text $fontSize={fontSize}>SKU: {children}</Styled.Text>;
}
