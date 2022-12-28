import AppError from '../utils/errors';

export default function checkAuthStatus(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  const appError = AppError.unauthorized(
    'You must be signed in to access this resource.',
    'not_authorized'
  );

  return next(appError);
}
