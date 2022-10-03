import renderer from 'react-test-renderer';
import Navbar from '../index';

describe('Navbar component', () => {
  it('renders all links and buttons', () => {
    const tree = renderer.create(<Navbar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
