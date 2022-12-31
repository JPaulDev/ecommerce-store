import createHandler from '../../../middleware/handler';
import passport from '../../../middleware/passport';
import validate from '../../../middleware/validate';
import AppError from '../../../utils/errors';
import { signInSchema } from '../../../validations/schemas';

const handler = createHandler();

handler.post(validate(signInSchema), (req, res, next) => {
  passport.authenticate('local', (err, user) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      const appError = AppError.unauthorized(
        'Invalid email or password. If you have forgotten your password, you can reset it.',
        'invalid_credentials'
      );

      return next(appError);
    }

    req.login(user, (error) => {
      if (error) {
        return next(error);
      }

      return res.status(200).json({
        user: {
          id: user.id,
          email: user.email,
          fullName: user.fullName,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
      });
    });

    return undefined;
  })(req, res, next);
});

export default handler;
