import renderer from 'react-test-renderer';
import Links from '../index';

describe('Links component at a screen width of 575px and above', () => {
  beforeAll(() => {
    window.resizeTo(575, 768);
  });

  it('shows links text and icons', () => {
    const tree = renderer.create(<Links />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Links component at a screen width of 574px and below', () => {
  beforeAll(() => {
    window.resizeTo(574, 768);
  });

  it('hides links text leaving only icons visible', () => {
    const tree = renderer.create(<Links />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
