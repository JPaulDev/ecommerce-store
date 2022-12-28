import argon2 from 'argon2';
import { findUserById, updateUserPassword } from '../../../lib/database/user';
import checkAuthStatus from '../../../middleware/auth';
import createHandler from '../../../middleware/handler';
import validate from '../../../middleware/validate';
import AppError from '../../../utils/errors';
import { changePasswordSchema } from '../../../validations/schemas';

const handler = createHandler();

handler.post(
  checkAuthStatus,
  validate(changePasswordSchema),
  async (req, res, next) => {
    const { currentPassword, newPassword } = req.body;
    const user = await findUserById(req.user.id);

    if (!user) {
      const appError = AppError.unauthorized(
        'Sorry, we are unable to find your account.',
        'invalid_credentials'
      );

      return next(appError);
    }

    const isMatch = await argon2.verify(user.password, currentPassword);

    if (isMatch) {
      const hashedPassword = await argon2.hash(newPassword);
      await updateUserPassword(user.id, hashedPassword);

      return res.status(200).json({
        message: 'Success, your password has been changed.',
      });
    }

    const appError = AppError.unauthorized(
      'Sorry, your password was incorrect. Please double-check your password.',
      'invalid_credentials'
    );

    return next(appError);
  }
);

export default handler;
