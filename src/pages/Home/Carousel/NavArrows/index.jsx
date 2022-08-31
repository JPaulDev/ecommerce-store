import MaterialIcon from '../../../../components/MaterialIcon';
import * as Styled from './styles';

export default function NavArrows({ onChangeSlide }) {
  return (
    <>
      <Styled.PrevSlideBtn type="button" onClick={() => onChangeSlide('PREV')}>
        <MaterialIcon iconSize="32px">chevron_left</MaterialIcon>
      </Styled.PrevSlideBtn>
      <Styled.NextSlideBtn type="button" onClick={() => onChangeSlide('NEXT')}>
        <MaterialIcon iconSize="32px">chevron_right</MaterialIcon>
      </Styled.NextSlideBtn>
    </>
  );
}
