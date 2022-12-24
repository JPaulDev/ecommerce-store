import { ErrorMessage as Error, Field, Form, Formik } from 'formik';
import styled from 'styled-components';
import {
  ErrorMessage,
  LabelledInput,
  StatusMessage,
  SubmitButton,
} from '../../../../components/ui';
import { useSubmit } from '../../../../hooks';
import { useSignInMutation } from '../../../../services/accounts';
import { signInSchema } from '../../../../validations/schemas';
import { ChangeViewButton, inputStyles } from '../styles';

export default function SignIn({ handleSetModalView, handleCloseModal }) {
  const [signInMutation] = useSignInMutation();
  const handleSubmit = useSubmit(signInMutation, handleCloseModal);

  return (
    <>
      <p>
        Tip: Use <strong>test@test.com</strong> and password{' '}
        <strong>test123!</strong> to sign in or create an account.
      </p>

      <Formik
        initialValues={{
          email: 'test@test.com',
          password: 'test123!',
        }}
        validationSchema={signInSchema}
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
              {status && <StatusMessage>{status}</StatusMessage>}

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

              <SubmitButton isSubmitting={isSubmitting}>Sign In</SubmitButton>
            </Form>
          );
        }}
      </Formik>

      <ForgotPasswordBtn
        type="button"
        onClick={() => handleSetModalView('FORGOT_PASSWORD_VIEW')}
      >
        Forgot Password?
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
  justify-content: center;
  position: relative;
  width: 100%;

  > span {
    background-color: white;
    color: ${({ theme }) => theme.colors.stone[600]};
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
