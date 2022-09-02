import renderer from 'react-test-renderer';
import LinkWithChevron from '../index';

describe('LinkWithChevron component', () => {
  it('renders a link with a chevron icon', () => {
    const tree = renderer
      .create(<LinkWithChevron url="test url" text="test text" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
