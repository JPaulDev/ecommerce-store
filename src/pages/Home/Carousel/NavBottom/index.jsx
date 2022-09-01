import * as Styled from './styles';

export default function NavBottom({ length, slideIndex, onChangeSlide }) {
  return (
    <Styled.Container>
      <Styled.List>
        {Array.from({ length }).map((_, index) => (
          <li key={index}>
            <Styled.Button
              type="button"
              isActive={index === slideIndex}
              aria-label={`Slide ${index + 1} of ${length}`}
              onClick={() => onChangeSlide('JUMP', index)}
            />
          </li>
        ))}
      </Styled.List>
    </Styled.Container>
  );
}
