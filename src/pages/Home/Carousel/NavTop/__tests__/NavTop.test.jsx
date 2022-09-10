import renderer from 'react-test-renderer';
import NavTop from '../index';

const slides = [
  {
    topNavText: '30 SERIES 3XS PCs',
  },
  {
    topNavText: 'INTEL 3XS PCs',
  },
];

describe('NavTop component', () => {
  it('renders a button with text for each slide in the slides array', () => {
    const tree = renderer.create(<NavTop slides={slides} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
