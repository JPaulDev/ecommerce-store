import renderer from 'react-test-renderer';
import TodayOnlyBanner from '../index';

describe('TodayOnlyBanner component', () => {
  it('renders a today only offers banner', () => {
    const tree = renderer.create(<TodayOnlyBanner />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
