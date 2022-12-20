import { useAnimationControls } from 'framer-motion';

function formErrorHandler({ err, setErrors, setStatus }) {
  const { message, code, errors } = err;

  switch (code) {
    case 'email_is_taken':
      setStatus(message);
      break;
    case 'invalid_credentials':
      setStatus(message);
      break;
    case 'internal_server_error':
      setStatus(message);
      break;
    case 'validation_error': {
      setErrors(errors);
      break;
    }
    default:
      setStatus('Something went wrong. Please try again.');
  }
}

export default function useSubmit(reduxMutationFn, successCallback) {
  const animationControls = useAnimationControls();

  const flashStatusMessage = () => {
    animationControls.set({ opacity: 0 });
    animationControls.start({
      opacity: 1,
      transition: { duration: 0.6 },
    });
  };

  const handleSubmit = async (formData, { setErrors, setStatus }) => {
    try {
      await reduxMutationFn(formData).unwrap();

      if (successCallback) {
        successCallback();
      }
    } catch (err) {
      formErrorHandler({ err, setErrors, setStatus });

      // If there is already a status message visible cause it to flash. For
      // example, If the user attempts to repeatedly submit invalid credentials.
      flashStatusMessage();
    }
  };

  return { handleSubmit, animationControls };
}
