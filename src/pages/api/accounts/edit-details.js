import { findUserById, updateUserDetails } from '../../../lib/database/user';
import checkAuthStatus from '../../../middleware/auth';
import createHandler from '../../../middleware/handler';
import validate from '../../../middleware/validate';
import AppError from '../../../utils/errors';
import { editDetailsSchema } from '../../../validations/schemas';

const handler = createHandler();

handler.post(
  checkAuthStatus,
  validate(editDetailsSchema),
  async (req, res, next) => {
    const { email, fullName } = req.body;
    const user = await findUserById(req.user.id);

    if (!user) {
      const appError = AppError.unauthorized(
        'Sorry, we are unable to find your account.',
        'invalid_credentials'
      );

      return next(appError);
    }

    const updatedUser = await updateUserDetails(user.id, email, fullName);

    return res.status(200).json({
      user: { ...updatedUser },
      message: 'Success, your details have been updated.',
    });
  }
);

export default handler;
