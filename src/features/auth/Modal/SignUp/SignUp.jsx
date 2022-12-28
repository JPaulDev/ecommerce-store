import { ErrorMessage as Error, Field, Form, Formik } from 'formik';
import {
  ErrorMessage,
  LabelledInput,
  StatusMessage,
  SubmitButton,
} from '../../../../components/ui';
import { useSubmit } from '../../../../hooks';
import { useSignUpMutation } from '../../../../services/accounts';
import { signUpSchema } from '../../../../validations/schemas';
import { ChangeViewButton, inputStyles } from '../styles';

export default function SignUp({ handleSetModalView, handleCloseModal }) {
  const [signUp] = useSignUpMutation();
  const handleSubmit = useSubmit(signUp, handleCloseModal);

  return (
    <>
      <p>Tip: You will be signed in immediately when you create an account.</p>

      <Formik
        initialValues={{
          email: '',
          fullName: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={signUpSchema}
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

              <Field
                as={LabelledInput}
                label="Full Name:"
                hideLabel
                inputStyles={inputStyles}
                name="fullName"
                type="text"
                placeholder="Full Name"
                onChange={handleChange}
                autoComplete="off"
                aria-required
                aria-invalid={touched.fullName && errors.fullName ? true : null}
                aria-describedby={
                  touched.fullName && errors.fullName ? 'fullName-error' : null
                }
                isInvalid={touched.fullName && errors.fullName}
              />
              <Error
                id="fullName-error"
                name="fullName"
                component={ErrorMessage}
              />

              <Field
                as={LabelledInput}
                label="Password:"
                hideLabel
                inputStyles={inputStyles}
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                aria-required
                aria-invalid={touched.password && errors.password ? true : null}
                aria-describedby={
                  touched.password && errors.password ? 'password-error' : null
                }
                isInvalid={touched.password && errors.password}
              />
              <Error
                id="password-error"
                name="password"
                component={ErrorMessage}
              />

              <Field
                as={LabelledInput}
                label="Confirm Password:"
                hideLabel
                inputStyles={inputStyles}
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                onChange={handleChange}
                aria-required
                aria-invalid={
                  touched.confirmPassword && errors.confirmPassword
                    ? true
                    : null
                }
                aria-describedby={
                  touched.confirmPassword && errors.confirmPassword
                    ? 'confirmPassword-error'
                    : null
                }
                isInvalid={touched.confirmPassword && errors.confirmPassword}
              />
              <Error
                id="confirmPassword-error"
                name="confirmPassword"
                component={ErrorMessage}
              />

              <SubmitButton isSubmitting={isSubmitting}>Sign Up</SubmitButton>
            </Form>
          );
        }}
      </Formik>

      <p
        css={`
          font-size: ${({ theme }) => theme.fontSizes[11]};
        `}
      >
        By clicking Sign Up, you agree to our Terms. Learn how we collect, use
        and share your data in our Privacy Policy and how we use cookies and
        similar technology in our Cookies Policy.
      </p>

      <div
        css={`
          margin-top: 5px;
        `}
      >
        Have an account?
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
