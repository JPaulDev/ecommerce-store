import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { setupStore } from '../../../../app/store';
import CheckoutPanel from '../index';

describe('CheckoutPanel component', () => {
  it('renders a checkout panel with a checkout button and the basket total', () => {
    const tree = renderer
      .create(
        <Provider store={setupStore()}>
          <CheckoutPanel />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
