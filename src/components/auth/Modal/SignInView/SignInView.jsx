import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useUI } from '../../../../contexts/UIContext';
import { signInSchema } from '../../../../validations/schemas';
import { InputWithLabel, LoadingSpinner } from '../../../ui';
import {
  ErrorText,
  inputStyles,
  PrimaryBtn,
  SecondaryBtn,
  Text,
} from '../styles';
import * as Styled from './styles';

export default function SignInView() {
  const { handleSetModalView } = useUI();

  return (
    <>
      <Text>
        Tip: Use <strong>test@test.com</strong> and password{' '}
        <strong>test123</strong> to sign in or create an account.
      </Text>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={signInSchema}
        onSubmit={() => {}}
      >
        {({ isSubmitting, touched, errors }) => (
          <Form noValidate>
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
              {isSubmitting ? <LoadingSpinner /> : 'Sign In'}
            </PrimaryBtn>
          </Form>
        )}
      </Formik>

      <Styled.ForgotPasswordBtn type="button">
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
