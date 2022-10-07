import renderer from 'react-test-renderer';
import FinancePanel from '../index';

describe('FinancePanel component', () => {
  it('renders a panel with finance information and relevant links', () => {
    const tree = renderer.create(<FinancePanel />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
