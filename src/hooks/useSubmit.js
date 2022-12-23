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
  const handleSubmit = async (formData, { setErrors, setStatus }) => {
    try {
      await reduxMutationFn(formData).unwrap();

      if (successCallback) {
        successCallback();
      }
    } catch (err) {
      formErrorHandler({ err, setErrors, setStatus });
    }
  };

  return handleSubmit;
}
