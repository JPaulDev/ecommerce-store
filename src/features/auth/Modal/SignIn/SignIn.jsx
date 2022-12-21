import { ErrorMessage, Field, Form, Formik } from 'formik';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Warning } from '../../../../components/icons';
import { LabelledInput, LoadingSpinner } from '../../../../components/ui';
import { useSubmit } from '../../../../hooks';
import { useSignInMutation } from '../../../../services/auth';
import { signInSchema } from '../../../../validations/schemas';
import {
  ChangeViewButton,
  ErrorText,
  inputStyles,
  StatusMessage,
  SubmitButton,
  Text,
} from '../styles';

export default function SignIn({ handleSetModalView, handleCloseModal }) {
  const [signInMutation] = useSignInMutation();
  const { handleSubmit, animationControls } = useSubmit(
    signInMutation,
    handleCloseModal
  );

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

            <SubmitButton
              type="submit"
              disabled={isSubmitting}
              isSubmitting={isSubmitting}
            >
              {isSubmitting && <LoadingSpinner size={30} color="white" />}
              <span>Sign In</span>
            </SubmitButton>
          </Form>
        )}
      </Formik>

      <ForgotPasswordBtn
        type="button"
        onClick={() => handleSetModalView('FORGOT_PASSWORD_VIEW')}
      >
        Forgotten Password?
      </ForgotPasswordBtn>

      <Divider>
        <span>OR</span>
      </Divider>

      <div>
        Don&lsquo;t have an account?
        <ChangeViewButton
          type="button"
          onClick={() => handleSetModalView('SIGN_UP_VIEW')}
        >
          Sign up
        </ChangeViewButton>
      </div>
    </>
  );
}

const ForgotPasswordBtn = styled.button`
  cursor: pointer;
  font-size: inherit;

  &:hover {
    text-decoration: underline;
  }
`;

const Divider = styled.div`
  align-items: center;
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes[13]};
  justify-content: center;
  margin: 10px 0 20px;
  position: relative;

  > span {
    background-color: white;
    color: ${({ theme }) => theme.colors.stone[500]};
    font-weight: 600;
    padding: 0 10px;
    z-index: 10;
  }

  &::after {
    background-color: ${({ theme }) => theme.colors.stone[300]};
    content: '';
    height: 2px;
    position: absolute;
    width: 100%;
  }
`;
