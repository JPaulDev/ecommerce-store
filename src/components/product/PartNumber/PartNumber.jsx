import * as Styled from './styles';

export default function PartNumber({ children, fontSize = 16 }) {
  return (
    <Styled.Text
      $fontSize={
        typeof fontSize === 'number' ? `var(--font-size-${fontSize})` : fontSize
      }
    >
      SKU: {children}
    </Styled.Text>
  );
}
