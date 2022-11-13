import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useUI } from '../../../../contexts/UIContext';
import { InputWithLabel, LoadingSpinner } from '../../../ui';
import { inputStyles, ErrorText, PrimaryBtn, SecondaryBtn } from '../styles';
import * as Styled from './styles';

const validationSchema = Yup.object({
  email: Yup.string()
    .required('Please enter your email.')
    .email('Please enter a valid email address.'),
  password: Yup.string().required('Please enter your password.'),
});

export default function SignInView() {
  const { handleSetModalView } = useUI();

  return (
    <div>
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
              isTouched={touched.email}
              isValid={!errors.email}
            />
            <ErrorMessage component={ErrorText} name="email" role="alert" />

            <Field
              as={InputWithLabel}
              label="Password:"
              styles={inputStyles}
              name="password"
              type="password"
              placeholder="Password"
              isTouched={touched.password}
              isValid={!errors.password}
            />
            <ErrorMessage component={ErrorText} name="password" role="alert" />

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
        Don&lsquo;t have an account?{' '}
        <SecondaryBtn
          type="button"
          onClick={() => handleSetModalView('SIGN_UP_VIEW')}
        >
          Sign up
        </SecondaryBtn>
      </div>
    </div>
  );
}
