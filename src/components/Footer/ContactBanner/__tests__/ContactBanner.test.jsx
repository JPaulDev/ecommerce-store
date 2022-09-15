import renderer from 'react-test-renderer';
import ContactBanner from '../index';

describe('ContactBanner component', () => {
  it('renders a banner with a contact number and a live chat link', () => {
    const tree = renderer.create(<ContactBanner />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
