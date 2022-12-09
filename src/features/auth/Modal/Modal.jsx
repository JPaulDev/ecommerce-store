import { useAnimationControls } from 'framer-motion';
import Image from 'next/future/image';
import { useEffect, useRef } from 'react';
import logo from '../../../../public/images/footer/pc-logo.webp';
import { Cross } from '../../../components/icons';
import { useUI } from '../../../contexts/UIContext';
import { useOnClickOutside, useSetFocus } from '../../../hooks';
import formErrorHandler from '../../../utils/form-error-handler';
import ForgotPasswordView from './ForgotPasswordView';
import SignInView from './SignInView';
import SignUpView from './SignUpView';
import * as Styled from './styles';

function ModalView({ handleCloseModal, modalView, handleSetModalView }) {
  const containerRef = useRef(null);
  const closeButtonRef = useRef(null);

  useOnClickOutside(containerRef, handleCloseModal);

  useSetFocus(closeButtonRef);

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    };

    window.addEventListener('keydown', handleEscapeKey);

    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, [handleCloseModal]);

  const animationControls = useAnimationControls();

  const flashStatusMessage = () => {
    animationControls.set({ opacity: 0 });
    animationControls.start({ opacity: 1, transition: { duration: 0.6 } });
  };

  // eslint-disable-next-line arrow-body-style
  const handleSubmit = (mutationFn) => {
    return async (formData, { setErrors, setStatus }) => {
      try {
        await mutationFn(formData).unwrap();
        handleCloseModal();
      } catch (err) {
        formErrorHandler({ err, setErrors, setStatus });

        // If there is already a status message visible and another error occurs,
        // cause it to flash. For example, If the user attempts to repeatedly
        // submit invalid credentials.
        flashStatusMessage();
      }
    };
  };

  return (
    <Styled.Backdrop>
      <Styled.Container ref={containerRef} role="dialog" aria-modal="true">
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
          <SignInView
            onSubmit={handleSubmit}
            animationControls={animationControls}
            handleSetModalView={handleSetModalView}
          />
        )}

        {modalView === 'SIGN_UP_VIEW' && (
          <SignUpView
            onSubmit={handleSubmit}
            animationControls={animationControls}
            handleSetModalView={handleSetModalView}
          />
        )}

        {modalView === 'FORGOT_PASSWORD_VIEW' && (
          <ForgotPasswordView
            onSubmit={handleSubmit}
            animationControls={animationControls}
            handleSetModalView={handleSetModalView}
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
