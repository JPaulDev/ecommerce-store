import {
  GraphicsCard,
  Memory,
  HardDrive,
  Processor,
  Motherboard,
} from '../../../icons';
import * as Styled from './styles';

const categories = [
  {
    heading: 'Graphics Cards',
    icon: <GraphicsCard width="60%" />,
    id: 4,
  },
  {
    heading: 'Memory',
    icon: <Memory width="60%" />,
    id: 2,
  },
  {
    heading: 'Storage',
    icon: <HardDrive width="60%" />,
    id: 7,
  },
  {
    heading: 'Processors',
    icon: <Processor width="60%" />,
    id: 1,
  },
  {
    heading: 'Motherboards',
    icon: <Motherboard width="60%" />,
    id: 3,
  },
];

export default function Categories({ onChangeCategory }) {
  return (
    <Styled.Container>
      <Styled.List>
        {categories.map((category) => (
          <li key={category.heading}>
            <Styled.Button
              type="button"
              onClick={() => onChangeCategory(category.id)}
            >
              <Styled.Wrapper>{category.icon}</Styled.Wrapper>
              <Styled.Heading>{category.heading}</Styled.Heading>
            </Styled.Button>
          </li>
        ))}
      </Styled.List>
    </Styled.Container>
  );
}
