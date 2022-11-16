import Image from 'next/future/image';
import { useRef, useEffect } from 'react';
import logo from '../../../../public/images/footer/pc-logo.webp';
import useOnClickOutside from '../../../lib/hooks/useOnClickOutside';
import { useUI } from '../../../contexts/UIContext';
import { Cross } from '../../icons';
import SignInView from './SignInView';
import SignUpView from './SignUpView';
import * as Styled from './styles';

function ModalView({ handleCloseModal, modalView }) {
  const ref = useRef(null);

  useOnClickOutside(ref, handleCloseModal);

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

  return (
    <Styled.Backdrop>
      <Styled.Container ref={ref} role="dialog" aria-modal="true">
        <Styled.CloseButton
          onClick={handleCloseModal}
          type="button"
          title="Close"
          aria-label="Close"
        >
          <Cross width={28} height={28} />
        </Styled.CloseButton>
        <Image src={logo} alt="" />
        {modalView === 'SIGN_IN_VIEW' && <SignInView />}
        {modalView === 'SIGN_UP_VIEW' && <SignUpView />}
      </Styled.Container>
    </Styled.Backdrop>
  );
}

// Prevents modal logic running unnecessarily on page load.
export default function Modal() {
  const { showModal, handleCloseModal, modalView } = useUI();

  return showModal ? (
    <ModalView handleCloseModal={handleCloseModal} modalView={modalView} />
  ) : null;
}
