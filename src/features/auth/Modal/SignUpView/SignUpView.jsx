import { ErrorMessage, Field, Form, Formik } from 'formik';
import { motion } from 'framer-motion';
import { Warning } from '../../../../components/icons';
import { LabelledInput, LoadingSpinner } from '../../../../components/ui';
import { useSignUpMutation } from '../../../../services/auth';
import { signUpSchema } from '../../../../validations/schemas';
import {
  ErrorText,
  inputStyles,
  PrimaryBtn,
  SecondaryBtn,
  StatusMessage,
  Text,
} from '../styles';
import * as Styled from './styles';

export default function SignUpView({
  onSubmit,
  animationControls,
  handleSetModalView,
}) {
  const [signUp] = useSignUpMutation();

  const handleSubmitWithMutation = onSubmit(signUp);

  return (
    <>
      <Text>
        Tip: You will be signed in immediately when you create an account.
      </Text>

      <Formik
        initialValues={{
          email: '',
          fullName: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={signUpSchema}
        onSubmit={handleSubmitWithMutation}
      >
        {({ touched, errors, status, isSubmitting }) => (
          <Form noValidate>
            {status && (
              <StatusMessage as={motion.div} animate={animationControls}>
                <Warning width={21} height={21} />
                <ErrorText role="alert">{status}</ErrorText>
              </StatusMessage>
            )}

            <Field
              as={LabelledInput}
              label="Email:"
              hideLabel
              inputStyles={inputStyles}
              name="email"
              type="email"
              placeholder="Email"
              aria-required
              aria-invalid={touched.email && errors.email ? true : null}
              aria-describedby={
                touched.email && errors.email ? 'email-error' : null
              }
              isTouched={touched.email}
              isValid={!errors.email}
            />
            <ErrorMessage
              id="email-error"
              component={ErrorText}
              name="email"
              role="alert"
            />

            <Field
              as={LabelledInput}
              label="Full Name:"
              hideLabel
              inputStyles={inputStyles}
              name="fullName"
              type="text"
              placeholder="Full Name"
              autoComplete="off"
              aria-required
              aria-invalid={touched.fullName && errors.fullName ? true : null}
              aria-describedby={
                touched.fullName && errors.fullName ? 'name-error' : null
              }
              isTouched={touched.fullName}
              isValid={!errors.fullName}
            />
            <ErrorMessage
              id="name-error"
              component={ErrorText}
              name="fullName"
              role="alert"
            />

            <Field
              as={LabelledInput}
              label="Password:"
              hideLabel
              inputStyles={inputStyles}
              name="password"
              type="password"
              placeholder="Password"
              aria-required
              aria-invalid={touched.password && errors.password ? true : null}
              aria-describedby={
                touched.password && errors.password ? 'password-error' : null
              }
              isTouched={touched.password}
              isValid={!errors.password}
            />
            <ErrorMessage
              id="password-error"
              component={ErrorText}
              name="password"
              role="alert"
            />

            <Field
              as={LabelledInput}
              label="Confirm Password:"
              hideLabel
              inputStyles={inputStyles}
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              aria-required
              aria-invalid={
                touched.confirmPassword && errors.confirmPassword ? true : null
              }
              aria-describedby={
                touched.confirmPassword && errors.confirmPassword
                  ? 'confirm-password-error'
                  : null
              }
              isTouched={touched.confirmPassword}
              isValid={!errors.confirmPassword}
            />
            <ErrorMessage
              id="confirm-password-error"
              component={ErrorText}
              name="confirmPassword"
              role="alert"
            />

            <PrimaryBtn type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <LoadingSpinner size={30} color="white" />
              ) : (
                'Sign Up'
              )}
            </PrimaryBtn>
          </Form>
        )}
      </Formik>

      <Styled.Text>
        By clicking Sign Up, you agree to our Terms. Learn how we collect, use
        and share your data in our Privacy Policy and how we use cookies and
        similar technology in our Cookies Policy.
      </Styled.Text>

      <div>
        Have an account?
        <SecondaryBtn
          type="button"
          onClick={() => handleSetModalView('SIGN_IN_VIEW')}
        >
          Sign in
        </SecondaryBtn>
      </div>
    </>
  );
}
