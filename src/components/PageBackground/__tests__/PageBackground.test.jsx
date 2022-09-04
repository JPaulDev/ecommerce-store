import renderer from 'react-test-renderer';
import PageBackground from '../index';

describe('PageBackground component', () => {
  it('renders a page background image', () => {
    const tree = renderer.create(<PageBackground />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
