export default function formErrorHandler({ err, setErrors, setStatus }) {
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
