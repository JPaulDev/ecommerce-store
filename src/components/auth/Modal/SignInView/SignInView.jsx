import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useUI } from '../../../../contexts/UIContext';
import { InputWithLabel, LoadingSpinner } from '../../../ui';
import {
  Text,
  inputStyles,
  ErrorText,
  PrimaryBtn,
  SecondaryBtn,
} from '../styles';
import * as Styled from './styles';

const validationSchema = Yup.object({
  email: Yup.string()
    .required('Please enter your email.')
    .email('Please enter a valid email address.')
    .max(50, 'Email must be less than 50 characters.'),
  password: Yup.string()
    .required('Please enter your password.')
    .max(50, 'Password must be less than 50 characters.'),
});

export default function SignInView() {
  const { handleSetModalView } = useUI();

  return (
    <>
      <Text>
        Tip: Use <strong>test@test.com</strong> and password{' '}
        <strong>test123</strong> to sign in.
      </Text>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
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
