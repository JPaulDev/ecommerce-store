import AppError from '../utils/errors';

export default function validate(schema) {
  return async (req, res, next) => {
    try {
      const validatedBody = await schema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      });
      req.body = validatedBody;

      return next();
    } catch (err) {
      const appError = AppError.unprocessableEntity(
        err.message,
        'validation_error',
        err.inner
      );

      return next(appError);
    }
  };
}
