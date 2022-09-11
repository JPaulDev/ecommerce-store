import renderer from 'react-test-renderer';
import Header from '../index';

describe('Header component', () => {
  it('renders a header with an image, search input and links', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
