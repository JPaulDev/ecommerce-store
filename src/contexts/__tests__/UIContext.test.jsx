/* eslint-disable react/button-has-type */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UIProvider, UIContext } from '../UIContext';

function setup(component) {
  return {
    user: userEvent.setup(),
    ...render(<UIProvider>{component}</UIProvider>),
  };
}

describe('UIContext modal', () => {
  it('showModal is false by default', () => {
    setup(
      <UIContext.Consumer>
        {(value) => <div>showModal: {value.showModal.toString()}</div>}
      </UIContext.Consumer>
    );

    expect(screen.getByText('showModal: false')).toBeInTheDocument();
  });

  it('modal view is set to SIGN_IN_VIEW by default', () => {
    setup(
      <UIContext.Consumer>
        {(value) => <div>modalView: {value.modalView}</div>}
      </UIContext.Consumer>
    );

    expect(screen.getByText('modalView: SIGN_IN_VIEW')).toBeInTheDocument();
  });

  it('should set showModal to true', async () => {
    const { user } = setup(
      <UIContext.Consumer>
        {(value) => (
          <>
            <div>showModal: {value.showModal.toString()}</div>
            <button onClick={value.handleOpenModal}>Open Modal</button>
          </>
        )}
      </UIContext.Consumer>
    );

    await user.click(screen.getByText('Open Modal'));

    expect(screen.getByText('showModal: true')).toBeInTheDocument();
  });

  it('should set showModal to false', async () => {
    const { user } = setup(
      <UIContext.Consumer>
        {(value) => (
          <>
            <div>showModal: {value.showModal.toString()}</div>
            <button onClick={value.handleOpenModal}>Open Modal</button>
            <button onClick={value.handleCloseModal}>Close Modal</button>
          </>
        )}
      </UIContext.Consumer>
    );

    await user.click(screen.getByText('Open Modal'));

    expect(screen.getByText('showModal: true')).toBeInTheDocument();

    await user.click(screen.getByText('Close Modal'));

    expect(screen.getByText('showModal: false')).toBeInTheDocument();
  });

  it('should change the modal view to SIGN_UP_VIEW', async () => {
    const { user } = setup(
      <UIContext.Consumer>
        {(value) => (
          <>
            <div>modalView: {value.modalView}</div>
            <button onClick={value.handleOpenModal}>Open Modal</button>
            <button onClick={() => value.handleSetModalView('SIGN_UP_VIEW')}>
              Set Modal View
            </button>
          </>
        )}
      </UIContext.Consumer>
    );

    expect(screen.getByText('modalView: SIGN_IN_VIEW')).toBeInTheDocument();

    await user.click(screen.getByText('Open Modal'));
    await user.click(screen.getByText('Set Modal View'));

    expect(screen.getByText('modalView: SIGN_UP_VIEW')).toBeInTheDocument();
  });

  it('should reset the modalView back to the default value', async () => {
    const { user } = setup(
      <UIContext.Consumer>
        {(value) => (
          <>
            <div>modalView: {value.modalView}</div>
            <button onClick={value.handleOpenModal}>Open Modal</button>
            <button onClick={value.handleCloseModal}>Close Modal</button>
            <button onClick={() => value.handleSetModalView('SIGN_UP_VIEW')}>
              Set Modal View
            </button>
          </>
        )}
      </UIContext.Consumer>
    );

    await user.click(screen.getByText('Open Modal'));
    await user.click(screen.getByText('Set Modal View'));

    expect(screen.getByText('modalView: SIGN_UP_VIEW')).toBeInTheDocument();

    await user.click(screen.getByText('Close Modal'));

    expect(screen.getByText('modalView: SIGN_IN_VIEW')).toBeInTheDocument();
  });

  it('should set showDropdown to false', async () => {
    const { user } = setup(
      <UIContext.Consumer>
        {(value) => (
          <>
            <div>showDropdown: {value.showDropdown.toString()}</div>
            <button onClick={value.handleOpenDropdown}>Open Dropdown</button>
            <button onClick={value.handleOpenModal}>Open Modal</button>
          </>
        )}
      </UIContext.Consumer>
    );

    await user.click(screen.getByText('Open Dropdown'));

    expect(screen.getByText('showDropdown: true')).toBeInTheDocument();

    await user.click(screen.getByText('Open Modal'));

    expect(screen.getByText('showDropdown: false')).toBeInTheDocument();
  });
});

describe('UIContext dropdown', () => {
  it('showDropdown is false by default', () => {
    setup(
      <UIContext.Consumer>
        {(value) => <div>showDropdown: {value.showDropdown.toString()}</div>}
      </UIContext.Consumer>
    );

    expect(screen.getByText('showDropdown: false')).toBeInTheDocument();
  });

  it('should set showDropdown to true', async () => {
    const { user } = setup(
      <UIContext.Consumer>
        {(value) => (
          <>
            <div>showDropdown: {value.showDropdown.toString()}</div>
            <button onClick={value.handleOpenDropdown}>Open Dropdown</button>
          </>
        )}
      </UIContext.Consumer>
    );

    await user.click(screen.getByText('Open Dropdown'));

    expect(screen.getByText('showDropdown: true')).toBeInTheDocument();
  });

  it('should set the dropdownMenu to COMPONENTS', async () => {
    const { user } = setup(
      <UIContext.Consumer>
        {(value) => (
          <>
            <div>dropdownMenu: {value.dropdownMenu}</div>
            <button onClick={() => value.handleOpenDropdown('COMPONENTS')}>
              Open Dropdown
            </button>
          </>
        )}
      </UIContext.Consumer>
    );

    expect(screen.getByText('dropdownMenu:')).toBeInTheDocument();

    await user.click(screen.getByText('Open Dropdown'));

    expect(screen.getByText('dropdownMenu: COMPONENTS')).toBeInTheDocument();
  });

  it('should set showModal to false and reset the modal view', async () => {
    const { user } = setup(
      <UIContext.Consumer>
        {(value) => (
          <>
            <div>showModal: {value.showModal.toString()}</div>
            <div>modalView: {value.modalView}</div>
            <button onClick={() => value.handleSetModalView('SIGN_UP_VIEW')}>
              Set Modal View
            </button>
            <button onClick={value.handleOpenDropdown}>Open Dropdown</button>
            <button onClick={value.handleOpenModal}>Open Modal</button>
          </>
        )}
      </UIContext.Consumer>
    );

    await user.click(screen.getByText('Open Modal'));
    await user.click(screen.getByText('Set Modal View'));

    expect(screen.getByText('showModal: true')).toBeInTheDocument();
    expect(screen.getByText('modalView: SIGN_UP_VIEW')).toBeInTheDocument();

    await user.click(screen.getByText('Open Dropdown'));

    expect(screen.getByText('modalView: SIGN_IN_VIEW')).toBeInTheDocument();
    expect(screen.getByText('showModal: false')).toBeInTheDocument();
  });
});
