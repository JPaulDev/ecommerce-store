import renderer from 'react-test-renderer';
import NavBottom from '../index';

describe('NavBottom component', () => {
  it('renders a button for each slide in the slides array', () => {
    const tree = renderer.create(<NavBottom length={2} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
