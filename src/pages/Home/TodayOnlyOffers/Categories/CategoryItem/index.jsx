import useIsHovered from '../../../../../hooks/useIsHovered';
import * as Styled from './styles';

export default function CategoryItem({ Icon, heading, onChangeCategory }) {
  const [isHovered, ref] = useIsHovered();

  return (
    <li ref={ref}>
      <Styled.Button type="button" onClick={onChangeCategory}>
        <Styled.Wrapper isHovered={isHovered}>
          <Icon />
        </Styled.Wrapper>
        <Styled.Heading isHovered={isHovered}>{heading}</Styled.Heading>
      </Styled.Button>
    </li>
  );
}
