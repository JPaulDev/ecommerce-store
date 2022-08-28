import renderer from 'react-test-renderer';
import Navbar from '../index';

it('Navbar renders correctly and all links are present', () => {
  const tree = renderer.create(<Navbar />).toJSON();
  expect(tree).toMatchSnapshot();
});
