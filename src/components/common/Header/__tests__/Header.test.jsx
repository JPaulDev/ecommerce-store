import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { setupStore } from '../../../../app/store';
import Header from '../index';

describe('Header component', () => {
  it('renders a header with an image, search input and links', () => {
    const tree = renderer
      .create(
        <Provider store={setupStore()}>
          <Header />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
