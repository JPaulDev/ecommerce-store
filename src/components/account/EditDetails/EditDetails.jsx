import { ErrorMessage as Error, Field, Form, Formik } from 'formik';
import { useSubmit } from '../../../hooks';
import { useEditDetailsMutation } from '../../../services/accounts';
import { editDetailsSchema } from '../../../validations/schemas';
import {
  ErrorMessage,
  LabelledInput,
  StatusMessage,
  SubmitButton,
} from '../../ui';
import { Container, GridContainer, inputStyles } from '../styles';

export default function EditDetails({ user }) {
  const [editDetailsMutation] = useEditDetailsMutation();

  const handleSubmit = useSubmit(editDetailsMutation);

  return (
    <Formik
      initialValues={{
        email: user.email,
        fullName: user.fullName,
      }}
      onSubmit={handleSubmit}
      validationSchema={editDetailsSchema}
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
                label="Email"
                inputStyles={inputStyles}
                name="email"
                type="email"
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
                label="Full Name"
                inputStyles={inputStyles}
                name="fullName"
                type="text"
                onChange={handleChange}
                autoComplete="off"
                aria-required
                aria-invalid={touched.fullName && errors.fullName ? true : null}
                aria-describedby={
                  touched.fullName && errors.fullName ? 'fullName-error' : null
                }
                isInvalid={touched.fullName && errors.fullName}
              />
              <Error
                id="fullName-error"
                name="fullName"
                component={ErrorMessage}
              />

              <Container>
                {status && (
                  <StatusMessage variant={status.error ? 'error' : 'success'}>
                    {status.error || status.success}
                  </StatusMessage>
                )}

                <SubmitButton isSubmitting={isSubmitting}>Submit</SubmitButton>
              </Container>
            </GridContainer>
          </Form>
        );
      }}
    </Formik>
  );
}
