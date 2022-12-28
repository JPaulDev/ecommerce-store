import argon2 from 'argon2';
import { findUserByEmail, signUpUser } from '../../../lib/database/user';
import createHandler from '../../../middleware/handler';
import validate from '../../../middleware/validate';
import AppError from '../../../utils/errors';
import { signUpSchema } from '../../../validations/schemas';

const handler = createHandler();

handler.post(validate(signUpSchema), async (req, res, next) => {
  const { email, fullName, password } = req.body;

  if (await findUserByEmail(email)) {
    const appError = AppError.unprocessableEntity(
      'An account with this email already exists.',
      'email_is_taken'
    );

    return next(appError);
  }

  const hashedPassword = await argon2.hash(password);
  const user = await signUpUser(email, fullName, hashedPassword);

  // Immediately sign the user in after creating an account.
  req.login(user, (err) => {
    if (err) {
      return next(err);
    }

    return res.status(200).json({ user });
  });

  return undefined;
});

export default handler;
