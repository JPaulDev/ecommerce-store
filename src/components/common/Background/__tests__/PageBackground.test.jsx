import renderer from 'react-test-renderer';
import PageBackground from '../index';

describe('PageBackground component', () => {
  it('renders a container and a background image', () => {
    const tree = renderer.create(<PageBackground page="home" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
