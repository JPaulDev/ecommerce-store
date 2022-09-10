import renderer from 'react-test-renderer';
import Categories from '../index';

describe('Categories component snapshot', () => {
  it('renders 5 buttons representing each selectable component category', () => {
    const tree = renderer.create(<Categories />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
