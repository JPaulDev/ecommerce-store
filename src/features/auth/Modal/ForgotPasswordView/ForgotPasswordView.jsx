import { ErrorMessage, Field, Form, Formik } from 'formik';
import { motion } from 'framer-motion';
import { Warning } from '../../../../components/icons';
import { LabelledInput, LoadingSpinner } from '../../../../components/ui';
import { useSubmit } from '../../../../hooks';
import { forgotPasswordSchema } from '../../../../validations/schemas';
import {
  ErrorText,
  inputStyles,
  PrimaryBtn,
  SecondaryBtn,
  StatusMessage,
  Text,
} from '../styles';
import * as Styled from './styles';

export default function ForgotPasswordView({
  handleSetModalView,
  handleCloseModal,
}) {
  // TODO: Implement reset password functionality
  const { handleSubmit, animationControls } = useSubmit(() => {});

  return (
    <>
      <Styled.Heading>Forgot your password?</Styled.Heading>
      <Text>
        Enter your email address and we&lsquo;ll send you a link to reset your
        password.
      </Text>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={forgotPasswordSchema}
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
              isValid={!errors.email}
            />
            <ErrorMessage
              id="email-error"
              component={ErrorText}
              name="email"
              role="alert"
            />

            <PrimaryBtn type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <LoadingSpinner size={30} color="white" />
              ) : (
                'Reset Password'
              )}
            </PrimaryBtn>
          </Form>
        )}
      </Formik>

      <Styled.Container>
        Want to go back?
        <SecondaryBtn
          type="button"
          onClick={() => handleSetModalView('SIGN_IN_VIEW')}
        >
          Sign in
        </SecondaryBtn>
      </Styled.Container>
    </>
  );
}
