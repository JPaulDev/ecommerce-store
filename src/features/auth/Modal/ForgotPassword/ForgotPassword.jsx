import { ErrorMessage as Error, Field, Form, Formik } from 'formik';
import {
  ErrorMessage,
  LabelledInput,
  StatusMessage,
  SubmitButton,
} from '../../../../components/ui';
import { useSubmit } from '../../../../hooks';
import { forgotPasswordSchema } from '../../../../validations/schemas';
import { ChangeViewButton, inputStyles } from '../styles';

export default function ForgotPassword({
  handleSetModalView,
  handleCloseModal,
}) {
  // TODO: Implement reset password functionality
  const handleSubmit = useSubmit(() => {}, handleCloseModal);

  return (
    <>
      <h4>Forgot your password?</h4>

      <p>
        Enter your email address and we&lsquo;ll send you a link to reset your
        password.
      </p>

      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={forgotPasswordSchema}
        onSubmit={handleSubmit}
      >
        {({
          touched,
          errors,
          handleChange: formikHandleChange,
          isSubmitting,
          status,
          setStatus,
        }) => {
          const handleChange = (e) => {
            formikHandleChange(e);
            setStatus(null);
          };

          return (
            <Form noValidate>
              {status?.error && (
                <StatusMessage variant="error">{status.error}</StatusMessage>
              )}

              <Field
                as={LabelledInput}
                label="Email:"
                hideLabel
                inputStyles={inputStyles}
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                aria-required
                aria-invalid={touched.email && errors.email ? true : null}
                aria-describedby={
                  touched.email && errors.email ? 'email-error' : null
                }
                isInvalid={touched.email && errors.email}
              />
              <Error id="email-error" name="email" component={ErrorMessage} />

              <SubmitButton isSubmitting={isSubmitting}>
                Reset Password
              </SubmitButton>
            </Form>
          );
        }}
      </Formik>

      <div
        css={`
          margin-top: 10px;
        `}
      >
        Want to go back?
        <ChangeViewButton
          type="button"
          onClick={() => handleSetModalView('SIGN_IN_VIEW')}
        >
          Sign in
        </ChangeViewButton>
      </div>
    </>
  );
}
