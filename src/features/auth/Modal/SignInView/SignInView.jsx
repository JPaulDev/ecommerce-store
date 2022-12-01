import { ErrorMessage, Field, Form, Formik } from 'formik';
import { motion } from 'framer-motion';
import { Warning } from '../../../../components/icons';
import { InputWithLabel, LoadingSpinner } from '../../../../components/ui';
import { useSignInMutation } from '../../../../services/auth';
import { signInSchema } from '../../../../validations/schemas';
import {
  ErrorText,
  inputStyles,
  PrimaryBtn,
  SecondaryBtn,
  StatusMessage,
  Text,
} from '../styles';
import * as Styled from './styles';

export default function SignInView({
  onSubmit,
  animationControls,
  handleSetModalView,
}) {
  const [signInMutation] = useSignInMutation();

  const handleSubmitWithMutation = onSubmit(signInMutation);

  return (
    <>
      <Text>
        Tip: Use <strong>test@test.com</strong> and password{' '}
        <strong>test123!</strong> to sign in or create an account.
      </Text>
      <Formik
        initialValues={{
          email: 'test@test.com',
          password: 'test123!',
        }}
        validationSchema={signInSchema}
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
              as={InputWithLabel}
              label="Email:"
              styles={inputStyles}
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
              as={InputWithLabel}
              label="Password:"
              styles={inputStyles}
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

            <PrimaryBtn type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <LoadingSpinner size={30} color="white" />
              ) : (
                'Sign In'
              )}
            </PrimaryBtn>
          </Form>
        )}
      </Formik>

      <Styled.ForgotPasswordBtn
        type="button"
        onClick={() => handleSetModalView('FORGOT_PASSWORD_VIEW')}
      >
        Forgotten Password?
      </Styled.ForgotPasswordBtn>

      <Styled.Divider>
        <span>OR</span>
      </Styled.Divider>

      <div>
        Don&lsquo;t have an account?
        <SecondaryBtn
          type="button"
          onClick={() => handleSetModalView('SIGN_UP_VIEW')}
        >
          Sign up
        </SecondaryBtn>
      </div>
    </>
  );
}
