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
      const errors = err.inner.reduce((acc, error) => {
        if (!acc[error.path]) {
          // eslint-disable-next-line no-param-reassign
          acc[error.path] = error.message;
        }

        return acc;
      }, {});

      const appError = AppError.unprocessableEntity(
        err.message,
        'validation_error',
        errors
      );

      return next(appError);
    }
  };
}
