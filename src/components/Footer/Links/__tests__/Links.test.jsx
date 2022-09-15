import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import Links from '../index';

const item = {
  heading: 'Information',
  links: [
    {
      text: 'About Us',
      url: 'About url',
    },
    {
      text: 'Contact',
      url: 'Contact url',
    },
  ],
};

describe('Links component', () => {
  it('renders a heading along with related links', () => {
    const tree = renderer.create(<Links item={item} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Links component dropdown menu', () => {
  beforeAll(() => {
    window.resizeTo(500, 768);
  });

  it('is initially closed', () => {
    render(<Links item={item} />);

    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  it('opens and closes the links dropdown on clicking the button', async () => {
    render(<Links item={item} />);
    const button = screen.getByRole('button');

    userEvent.click(button);

    expect(screen.getAllByRole('link')).toHaveLength(2);

    // Delays the second click to prevent the menu improperly closing
    setTimeout(() => userEvent.click(button), 600);

    await waitForElementToBeRemoved(screen.queryAllByRole('link'), {
      timeout: 2000,
    });
  });
});

describe('Links component at different screen widths', () => {
  it('renders a heading instead of a button at 860px and above', () => {
    window.resizeTo(860, 768);
    render(<Links item={item} />);

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('renders a button to control the links dropdown 859px and below', () => {
    window.resizeTo(859, 768);
    render(<Links item={item} />);

    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
