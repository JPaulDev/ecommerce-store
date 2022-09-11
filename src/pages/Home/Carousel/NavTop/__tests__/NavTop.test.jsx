import renderer from 'react-test-renderer';
import NavTop from '../index';

const slides = [
  {
    topNavText: 'slide 1',
  },
  {
    topNavText: 'slide 2',
  },
  {
    topNavText: 'slide 3',
  },
];

describe('NavTop component', () => {
  it('renders a button with text for each slide in the slides array', () => {
    const tree = renderer.create(<NavTop slides={slides} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
