import * as Styled from './styles';

export default function PreviousPrice({ children, fontSize = 16 }) {
  return (
    <Styled.Text
      $fontSize={
        typeof fontSize === 'number' ? `var(--font-size-${fontSize})` : fontSize
      }
    >
      <span>Was: </span>
      {children}
    </Styled.Text>
  );
}
