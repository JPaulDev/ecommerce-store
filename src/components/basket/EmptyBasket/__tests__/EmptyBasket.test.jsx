import renderer from 'react-test-renderer';
import EmptyBasket from '../index';

describe('EmptyBasket component', () => {
  it('renders message that displays when the users basket is empty', () => {
    const tree = renderer.create(<EmptyBasket />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
