import * as Yup from 'yup';

const email = Yup.string()
  .trim()
  .lowercase()
  .required('Please enter your email.')
  .email('Please enter a valid email address.')
  .max(255, 'Your email must be no more than 255 characters.');

export const signInSchema = Yup.object({
  email,
  password: Yup.string()
    .required('Please enter your password.')
    .max(64, 'Password must be no more than 64 characters.'),
});

export const signUpSchema = Yup.object({
  email,
  fullName: Yup.string()
    .trim()
    .required('Please enter your full name.')
    .test('fullName', 'Your full name must include a space.', (value) =>
      value?.includes(' ')
    )
    .test(
      'fullName',
      'Please enter only your first and last name.',
      (value) => value?.split(' ').length === 2
    )
    .max(50, 'Your full name must be no more than 50 characters.'),
  password: Yup.string()
    .required('Please enter a password.')
    .min(6, 'Your password must be at least 6 characters.')
    .max(64, 'Your password must be no more than 64 characters.'),
  confirmPassword: Yup.string()
    .required('Please type your password again.')
    .equals([Yup.ref('password')], 'Passwords must match.'),
});

export const forgotPasswordSchema = Yup.object({
  email,
});

export const changePasswordSchema = Yup.object({
  currentPassword: Yup.string()
    .required('Please enter your current password.')
    .max(64, 'Password must be no more than 64 characters.'),
  newPassword: Yup.string()
    .required('Please enter a new password.')
    .min(6, 'Your password must be at least 6 characters.')
    .max(64, 'Your password must be no more than 64 characters.'),
  confirmNewPassword: Yup.string()
    .required('Please type your new password again.')
    .equals([Yup.ref('newPassword')], 'Passwords must match.'),
});
