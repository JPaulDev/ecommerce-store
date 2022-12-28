import { ErrorMessage as Error, Field, Form, Formik } from 'formik';
import styled from 'styled-components';
import { useUI } from '../../../contexts/UIContext';
import { useSubmit } from '../../../hooks';
import { useChangePasswordMutation } from '../../../services/accounts';
import { changePasswordSchema } from '../../../validations/schemas';
import {
  ErrorMessage,
  LabelledInput,
  StatusMessage,
  SubmitButton,
} from '../../ui';
import { Container, GridContainer, inputStyles } from '../styles';

export default function ChangePassword() {
  const { handleOpenModal, handleSetModalView } = useUI();
  const [changePasswordMutation] = useChangePasswordMutation();

  const handleSubmit = useSubmit(changePasswordMutation);

  const handleOpenModalAndSetView = () => {
    handleSetModalView('FORGOT_PASSWORD_VIEW');
    handleOpenModal();
  };

  return (
    <Formik
      initialValues={{
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={changePasswordSchema}
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
            <GridContainer>
              <Field
                as={LabelledInput}
                label="Current Password"
                inputStyles={inputStyles}
                name="currentPassword"
                type="password"
                onChange={handleChange}
                aria-required
                aria-invalid={
                  touched.currentPassword && errors.currentPassword
                    ? true
                    : null
                }
                aria-describedby={
                  touched.currentPassword && errors.currentPassword
                    ? 'currentPassword-error'
                    : null
                }
                isInvalid={touched.currentPassword && errors.currentPassword}
              />
              <Error
                id="currentPassword-error"
                name="currentPassword"
                component={ErrorMessage}
              />

              <Field
                as={LabelledInput}
                label="New Password"
                inputStyles={inputStyles}
                name="newPassword"
                type="password"
                onChange={handleChange}
                aria-required
                aria-invalid={
                  touched.newPassword && errors.newPassword ? true : null
                }
                aria-describedby={
                  touched.newPassword && errors.newPassword
                    ? 'newPassword-error'
                    : null
                }
                isInvalid={touched.newPassword && errors.newPassword}
              />
              <Error
                id="newPassword-error"
                name="newPassword"
                component={ErrorMessage}
              />

              <Field
                as={LabelledInput}
                label="Confirm New Password"
                inputStyles={inputStyles}
                name="confirmNewPassword"
                type="password"
                onChange={handleChange}
                aria-required
                aria-invalid={
                  touched.confirmNewPassword && errors.confirmNewPassword
                    ? true
                    : null
                }
                aria-describedby={
                  touched.confirmNewPassword && errors.confirmNewPassword
                    ? 'confirmNewPassword-error'
                    : null
                }
                isInvalid={
                  touched.confirmNewPassword && errors.confirmNewPassword
                }
              />
              <Error
                id="confirmNewPassword-error"
                name="confirmNewPassword"
                component={ErrorMessage}
              />

              <Container>
                {status && (
                  <StatusMessage variant={status.error ? 'error' : 'success'}>
                    {status.error || status.success}
                  </StatusMessage>
                )}

                <SubmitButton isSubmitting={isSubmitting}>
                  Change Password
                </SubmitButton>

                <ForgotPasswordBtn
                  type="button"
                  onClick={handleOpenModalAndSetView}
                >
                  Forgot password?
                </ForgotPasswordBtn>
              </Container>
            </GridContainer>
          </Form>
        );
      }}
    </Formik>
  );
}

export const ForgotPasswordBtn = styled.button`
  color: ${({ theme }) => theme.colors.sky[600]};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes[14]};
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;
