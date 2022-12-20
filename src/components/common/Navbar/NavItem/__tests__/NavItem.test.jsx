import React from 'react';
import { render, screen } from '../../../../../../test-utils';
import NavItem from '../index';

const linkItem = { title: 'title', href: '/' };
const buttonItem = { title: 'title' };

describe('NavItem', () => {
  it('should render a link when there is an href property', () => {
    render(<NavItem item={linkItem} />);

    expect(
      screen.queryByRole('button', { name: /title/i })
    ).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: /title/i })).toBeInTheDocument();
  });

  it('should render a button when there is no href property', () => {
    render(<NavItem item={buttonItem} />);

    expect(
      screen.queryByRole('link', { name: /title/i })
    ).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: /title/i })).toBeInTheDocument();
  });
});
