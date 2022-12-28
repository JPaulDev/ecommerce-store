function formErrorHandler(err, setErrors, setStatus) {
  const { message, code, errors } = err.data.error;

  if (code === 'validation_error') {
    setErrors(errors);
    return;
  }

  setStatus({ error: message });
}

export default function useSubmit(reduxMutationFn, successCallback) {
  const handleSubmit = async (formData, { setErrors, setStatus }) => {
    try {
      const data = await reduxMutationFn(formData).unwrap();
      setStatus({ success: data?.message });

      if (successCallback) {
        successCallback();
      }
    } catch (err) {
      if ('data' in err) {
        formErrorHandler(err, setErrors, setStatus);
        return;
      }

      setStatus({ error: 'Something went wrong. Please try again later.' });
    }
  };

  return handleSubmit;
}
