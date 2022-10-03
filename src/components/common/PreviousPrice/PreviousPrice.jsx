import * as Styled from './styles';

export default function PreviousPrice({ price, fontSize }) {
  return (
    <Styled.Text $fontSize={fontSize}>
      <Styled.SmallText>Was: </Styled.SmallText>
      {price}
    </Styled.Text>
  );
}
