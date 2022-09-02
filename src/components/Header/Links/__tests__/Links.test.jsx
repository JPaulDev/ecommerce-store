import renderer from 'react-test-renderer';
import Links from '../index';

describe('Links component at a screen width of 575px and above', () => {
  it('renders links with their icons and text visible', () => {
    window.resizeTo(575, 768);
    const tree = renderer.create(<Links />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('Links component at a screen width of 574px and below', () => {
  it('renders links with no text and only their icons visible', () => {
    window.resizeTo(574, 768);
    const tree = renderer.create(<Links />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
