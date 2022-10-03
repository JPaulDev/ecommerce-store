import renderer from 'react-test-renderer';
import PromoBanner from '../index';

describe('PromoBanner component', () => {
  it('renders a promotional banner about RTX studio', () => {
    const tree = renderer.create(<PromoBanner />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
