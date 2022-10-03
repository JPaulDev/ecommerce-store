import ChevronLeft from '../../../icons/ChevronLeft';
import ChevronRight from '../../../icons/ChevronRight';
import * as Styled from './styles';

export default function NavArrows({ onChangeSlide }) {
  return (
    <Styled.List>
      <li>
        <Styled.Button
          type="button"
          title="Previous"
          aria-label="Previous Slide"
          onClick={() => onChangeSlide('PREV')}
        >
          <ChevronLeft width={14} height={19} />
        </Styled.Button>
      </li>
      <li>
        <Styled.Button
          type="button"
          title="Next"
          aria-label="Next Slide"
          onClick={() => onChangeSlide('NEXT')}
        >
          <ChevronRight width={14} height={19} />
        </Styled.Button>
      </li>
    </Styled.List>
  );
}
