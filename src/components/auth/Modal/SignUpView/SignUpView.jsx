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
  fullName: Yup.string()
    .required('Please enter your full name.')
    .trim()
    .test('fullName', 'Full name must include a space.', (value) =>
      value?.includes(' ')
    )
    .test(
      'fullName',
      'Please enter only your first and last name.',
      (value) => value?.split(' ').length === 2
    )
    .max(50, 'Full name must be less than 50 characters.'),
  password: Yup.string()
    .required('Please enter a password.')
    .min(6, 'Password must be at least 6 characters.')
    .max(50, 'Password must be less than 50 characters.'),
  confirmPassword: Yup.string()
    .required('Please confirm your password.')
    .equals([Yup.ref('password')], 'Passwords must match.')
    .max(50, 'Password must be less than 50 characters.'),
});

export default function SignUpView() {
  const { handleSetModalView } = useUI();

  return (
    <>
      <Text>
        Tip: You will be able to sign in immediately once you create an account.
      </Text>
      <Formik
        initialValues={{
          email: '',
          fullName: '',
          password: '',
          confirmPassword: '',
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
              label="Full Name:"
              styles={inputStyles}
              name="fullName"
              type="text"
              placeholder="Full Name"
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

            <Field
              as={InputWithLabel}
              label="Confirm Password:"
              styles={inputStyles}
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
              {isSubmitting ? <LoadingSpinner /> : 'Sign Up'}
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
