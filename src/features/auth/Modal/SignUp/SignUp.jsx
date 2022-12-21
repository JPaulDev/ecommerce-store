import { ErrorMessage, Field, Form, Formik } from 'formik';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Warning } from '../../../../components/icons';
import { LabelledInput, LoadingSpinner } from '../../../../components/ui';
import { useSubmit } from '../../../../hooks';
import { useSignUpMutation } from '../../../../services/auth';
import { signUpSchema } from '../../../../validations/schemas';
import {
  ChangeViewButton,
  ErrorText,
  inputStyles,
  StatusMessage,
  SubmitButton,
  Text,
} from '../styles';

export default function SignUp({ handleSetModalView, handleCloseModal }) {
  const [signUp] = useSignUpMutation();
  const { handleSubmit, animationControls } = useSubmit(
    signUp,
    handleCloseModal
  );

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
        onSubmit={handleSubmit}
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
              isInvalid={errors.email}
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
              isInvalid={errors.fullName}
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
              isInvalid={errors.password}
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
              isInvalid={errors.confirmPassword}
            />
            <ErrorMessage
              id="confirm-password-error"
              component={ErrorText}
              name="confirmPassword"
              role="alert"
            />

            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <LoadingSpinner size={30} color="white" />
              ) : (
                'Sign Up'
              )}
            </SubmitButton>
          </Form>
        )}
      </Formik>

      <SmallText>
        By clicking Sign Up, you agree to our Terms. Learn how we collect, use
        and share your data in our Privacy Policy and how we use cookies and
        similar technology in our Cookies Policy.
      </SmallText>

      <div>
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

const SmallText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[11]};
  margin-bottom: 20px;
`;
