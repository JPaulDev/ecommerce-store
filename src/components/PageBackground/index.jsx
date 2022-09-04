import * as Styled from './styles';

export default function PageBackground({ background }) {
  return (
    <Styled.Wrapper>
      <Styled.Background background={background} />
    </Styled.Wrapper>
  );
}
