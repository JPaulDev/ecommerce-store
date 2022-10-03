import * as Styled from './styles';

export default function NavTop({ slides, slideIndex, onChangeSlide }) {
  return (
    <Styled.List>
      {slides.map((slide, index) => (
        <li key={slide.topNavText}>
          <Styled.Button
            type="button"
            isActive={index === slideIndex}
            onClick={() => onChangeSlide('JUMP', index)}
          >
            {slide.topNavText}
          </Styled.Button>
        </li>
      ))}
    </Styled.List>
  );
}
