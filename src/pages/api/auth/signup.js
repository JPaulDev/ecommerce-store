import argon2 from 'argon2';
import nextConnect from 'next-connect';
import { createUser, getUserByEmail } from '../../../lib/database/user';
import { errorHandler, passport, session, validate } from '../../../middleware';
import AppError from '../../../utils/errors';
import { signUpSchema } from '../../../validations/schemas';

const handler = nextConnect({
  onError: errorHandler,
  onNoMatch: (req, res) => {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  },
});

handler.post(
  session,
  passport.initialize(),
  passport.session(),
  validate(signUpSchema),
  async (req, res, next) => {
    const { email, fullName, password } = req.body;

    if (await getUserByEmail(email)) {
      const appError = AppError.unprocessableEntity(
        'An account with this email already exists.',
        'email_is_taken'
      );

      return next(appError);
    }

    const hashedPassword = await argon2.hash(password);
    const user = await createUser(email, fullName, hashedPassword);

    // Immediately sign the user in after creating an account.
    req.login(user, (err) => {
      if (err) {
        return next(err);
      }

      return res.status(200).json({
        user: {
          id: user.id,
          email: user.email,
          fullName: user.fullName,
        },
      });
    });

    return undefined;
  }
);

export default handler;
