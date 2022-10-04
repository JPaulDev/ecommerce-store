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
  },
  {
    heading: 'Memory',
    icon: <Memory width="60%" />,
  },
  {
    heading: 'Storage',
    icon: <HardDrive width="60%" />,
  },
  {
    heading: 'Processors',
    icon: <Processor width="60%" />,
  },
  {
    heading: 'Motherboards',
    icon: <Motherboard width="60%" />,
  },
];

export default function Categories({ onChangeCategory }) {
  return (
    <Styled.Container>
      <Styled.List>
        {categories.map((item) => (
          <li key={item.heading}>
            <Styled.Button
              type="button"
              onClick={() => onChangeCategory(item.heading)}
            >
              <Styled.Wrapper>{item.icon}</Styled.Wrapper>
              <Styled.Heading>{item.heading}</Styled.Heading>
            </Styled.Button>
          </li>
        ))}
      </Styled.List>
    </Styled.Container>
  );
}
