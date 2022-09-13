import MaterialSymbol from '../../MaterialSymbol';
import * as Styled from './styles';

export default function ContactBanner() {
  return (
    <Styled.Container>
      <Styled.Link href="">
        <MaterialSymbol iconSize="28px">phone_iphone</MaterialSymbol>
        01782-444455
      </Styled.Link>
      <Styled.Link href="">
        <MaterialSymbol iconSize="28px">support_agent</MaterialSymbol>
        Live Chat
      </Styled.Link>
    </Styled.Container>
  );
}
