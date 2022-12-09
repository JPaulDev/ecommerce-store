import { useAnimationControls } from 'framer-motion';
import formErrorHandler from '../utils/form-error-handler';

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
