import renderer from 'react-test-renderer';
import Payments from '../index';

describe('Payments component', () => {
  it('renders a list of accepted payment methods', () => {
    const tree = renderer.create(<Payments />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
