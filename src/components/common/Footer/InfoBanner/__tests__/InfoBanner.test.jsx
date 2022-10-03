import renderer from 'react-test-renderer';
import InfoBanner from '../index';

describe('InfoBanner component', () => {
  it('renders a banner with the company address/information and social media links', () => {
    const tree = renderer.create(<InfoBanner />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
