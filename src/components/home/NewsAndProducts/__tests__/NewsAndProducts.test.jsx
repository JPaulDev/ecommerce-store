import renderer from 'react-test-renderer';
import NewsAndProducts from '../index';

describe('NewsAndProducts component', () => {
  it('renders a news section with 3 articles and latest products links', () => {
    const tree = renderer.create(<NewsAndProducts />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
