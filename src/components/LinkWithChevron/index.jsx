import MaterialIcon from '../MaterialIcon';
import * as Styled from './styles';

export default function LinkWithChevron({ url, text, fontSize, iconSize }) {
  return (
    <Styled.Link href={url} $fontSize={fontSize} data-testid="link-chevron">
      {text}
      <Styled.Container>
        <MaterialIcon iconSize={iconSize} iconColor="white">
          chevron_right
        </MaterialIcon>
      </Styled.Container>
    </Styled.Link>
  );
}