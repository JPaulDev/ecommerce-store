import { ErrorMessage, Field, Form, Formik } from 'formik';
import { motion, useAnimationControls } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { useUI } from '../../../../contexts/UIContext';
import { signIn } from '../../../../features/auth/authSlice';
import { useSignUpMutation } from '../../../../services/auth';
import formErrorHandler from '../../../../utils/form-error-handler';
import { signUpSchema } from '../../../../validations/schemas';
import { Warning } from '../../../icons';
import { InputWithLabel, LoadingSpinner } from '../../../ui';
import {
  ErrorText,
  inputStyles,
  PrimaryBtn,
  SecondaryBtn,
  ServerError,
  Text,
} from '../styles';
import * as Styled from './styles';

export default function SignUpView() {
  const { handleSetModalView, handleCloseModal } = useUI();
  const [signUp] = useSignUpMutation();
  const dispatch = useDispatch();

  const controls = useAnimationControls();

  const flashStatusError = () => {
    controls.set({ opacity: 0 });
    controls.start({ opacity: 1, transition: { duration: 0.6 } });
  };

  const handleSubmit = async (data, { setErrors, setStatus }) => {
    try {
      const user = await signUp(data).unwrap();

      dispatch(signIn(user));
      handleCloseModal();
    } catch (err) {
      formErrorHandler(err, setErrors, setStatus);
      // If there is already a status error and another occurs, cause it to flash.
      flashStatusError();
    }
  };

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
              <ServerError as={motion.div} animate={controls}>
                <Warning width={21} height={21} />
                <ErrorText role="alert">{status}</ErrorText>
              </ServerError>
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
              label="Full Name:"
              styles={inputStyles}
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
