export default function formErrorHandler({ err, setErrors, setStatus }) {
  const { message, code, errors = [] } = err;

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
      const fieldErrors = errors.reduce((acc, next) => {
        if (!acc[next.path]) {
          // eslint-disable-next-line no-param-reassign
          acc[next.path] = next.message;
        }

        return acc;
      }, {});

      setErrors(fieldErrors);
      break;
    }
    default:
      setStatus('Something went wrong. Please try again.');
  }
}
