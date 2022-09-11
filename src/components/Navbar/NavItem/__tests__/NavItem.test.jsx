import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NavItem from '../index';

const linkItem = { title: 'Home', url: '' };
const buttonItem = { title: 'Components', hasDropdown: true };

describe('NavItem component', () => {
  it('renders a link element when no hasDropdown property is set', () => {
    render(<NavItem item={linkItem} />);

    expect(getLink()).toBeInTheDocument();
  });

  it('renders a button element when hasDropdown property is set to true', () => {
    render(<NavItem item={buttonItem} />);

    expect(getButton()).toBeInTheDocument();
  });
});

describe('NavItem dropdown', () => {
  beforeEach(() => {
    render(<NavItem item={buttonItem} />);
  });

  it('opens when the button is clicked', () => {
    const button = getButton();

    userEvent.click(button);

    expect(screen.getByTestId('dropdown-menu')).toBeInTheDocument();
  });

  it('closes when the button is clicked', () => {
    const button = getButton();

    userEvent.click(button);
    userEvent.click(button);

    expect(screen.queryByTestId('dropdown-menu')).toBeNull();
  });

  it('closes on clicks outside of the dropdown menu', () => {
    const button = getButton();

    userEvent.click(button);
    userEvent.click(document.body);

    expect(screen.queryByTestId('dropdown-menu')).toBeNull();
  });
});

function getButton() {
  return screen.getByRole('button', { name: /components/i });
}

function getLink() {
  return screen.getByRole('link', { name: /home/i });
}
