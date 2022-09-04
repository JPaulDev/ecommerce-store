import { ReactComponent as GfxIcon } from '../../../../assets/svg/gfx.svg';
import { ReactComponent as MemoryIcon } from '../../../../assets/svg/memory.svg';
import { ReactComponent as HddIcon } from '../../../../assets/svg/hdd.svg';
import { ReactComponent as ProcessorIcon } from '../../../../assets/svg/processor.svg';
import { ReactComponent as MotherboardIcon } from '../../../../assets/svg/motherboard.svg';
import CategoryItem from './CategoryItem';
import * as Styled from './styles';

const categories = [
  {
    heading: 'Graphics Cards',
    icon: GfxIcon,
  },
  {
    heading: 'Memory',
    icon: MemoryIcon,
  },
  {
    heading: 'Hard Drives',
    icon: HddIcon,
  },
  {
    heading: 'Processors',
    icon: ProcessorIcon,
  },
  {
    heading: 'Motherboards',
    icon: MotherboardIcon,
  },
];

export default function Categories({ onChangeCategory }) {
  return (
    <Styled.Container>
      <Styled.List>
        {categories.map((category) => (
          <CategoryItem
            key={category.heading}
            Icon={category.icon}
            heading={category.heading}
            onChangeCategory={() => onChangeCategory(category.heading)}
          />
        ))}
      </Styled.List>
    </Styled.Container>
  );
}
