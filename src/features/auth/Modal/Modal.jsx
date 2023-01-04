import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';
import Image from 'next/future/image';
import { useEffect, useRef } from 'react';
import logo from '../../../../public/images/footer/pc-logo.webp';
import { Cross } from '../../../components/icons';
import { useUI } from '../../../contexts/UIContext';
import {
  useCloseOnEscape,
  useOnClickOutside,
  useSetFocus,
} from '../../../hooks';
import ForgotPassword from './ForgotPassword';
import SignIn from './SignIn';
import SignUp from './SignUp';
import * as Styled from './styles';

function ModalView({ handleCloseModal, modalView, handleSetModalView }) {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  useOnClickOutside(modalRef, handleCloseModal);
  useSetFocus(closeButtonRef);
  useCloseOnEscape(handleCloseModal);

  useEffect(() => {
    if (modalRef.current) {
      disableBodyScroll(modalRef.current, { reserveScrollBarGap: true });
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, []);

  return (
    <Styled.Backdrop>
      <Styled.Container ref={modalRef} role="dialog" aria-modal="true">
        <Styled.CloseButton
          ref={closeButtonRef}
          onClick={handleCloseModal}
          type="button"
          title="Close"
          aria-label="Close"
        >
          <Cross width={28} height={28} />
        </Styled.CloseButton>
        <Image src={logo} alt="" />

        {modalView === 'SIGN_IN_VIEW' && (
          <SignIn
            handleSetModalView={handleSetModalView}
            handleCloseModal={handleCloseModal}
          />
        )}

        {modalView === 'SIGN_UP_VIEW' && (
          <SignUp
            handleSetModalView={handleSetModalView}
            handleCloseModal={handleCloseModal}
          />
        )}

        {modalView === 'FORGOT_PASSWORD_VIEW' && (
          <ForgotPassword
            handleSetModalView={handleSetModalView}
            handleCloseModal={handleCloseModal}
          />
        )}
      </Styled.Container>
    </Styled.Backdrop>
  );
}

// Prevents modal logic running unnecessarily on page load.
export default function Modal() {
  const { showModal, handleCloseModal, modalView, handleSetModalView } =
    useUI();

  return showModal ? (
    <ModalView
      handleCloseModal={handleCloseModal}
      modalView={modalView}
      handleSetModalView={handleSetModalView}
    />
  ) : null;
}
