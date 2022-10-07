import renderer from 'react-test-renderer';
import NotFound from '../pages/404';

describe('NotFound component', () => {
  it('renders a 404 error page', () => {
    const tree = renderer.create(<NotFound />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
