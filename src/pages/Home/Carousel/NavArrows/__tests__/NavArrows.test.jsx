import renderer from 'react-test-renderer';
import NavArrows from '../index';

describe('NavArrows component', () => {
  it('renders two buttons with left and right arrows', () => {
    const tree = renderer.create(<NavArrows />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
