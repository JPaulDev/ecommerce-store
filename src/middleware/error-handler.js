import AppError from '../utils/errors';

const NODE_ENVIRONMENT = process.env.NODE_ENV || 'development';

export default function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }

  if (err instanceof AppError) {
    return res.status(err.status).json({
      error: {
        status: err.status,
        message: err.message,
        code: err.code,
        data: err.data,
      },
    });
  }

  if (NODE_ENVIRONMENT !== 'production') {
    console.error(err);

    return res.status(err.status || 500).json({
      error: {
        message: err.message,
        stack: err.stack,
        code: err.code,
      },
    });
  }

  return res.status(500).json({
    error: {
      status: 500,
      message: 'Oops! Something went wrong. Please try again later.',
      code: 'internal_server_error',
    },
  });
}
