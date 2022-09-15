import renderer from 'react-test-renderer';
import NavTop from '../index';

const slides = [
  {
    topNavText: 'Slide 1',
  },
  {
    topNavText: 'Slide 2',
  },
  {
    topNavText: 'Slide 3',
  },
];

describe('NavTop component', () => {
  it('renders a button with text for each slide in the slides array', () => {
    const tree = renderer.create(<NavTop slides={slides} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
