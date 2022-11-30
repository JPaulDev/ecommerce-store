export default class AppError extends Error {
  constructor(status, message, code, errors) {
    super(message);
    this.status = status;
    this.code = code;
    this.errors = errors;
  }

  static badRequest(message, code) {
    return new AppError(400, message, code);
  }

  static unauthorized(message, code) {
    return new AppError(401, message, code);
  }

  static forbidden(message, code) {
    return new AppError(403, message, code);
  }

  static notFound(message, code) {
    return new AppError(404, message, code);
  }

  static unprocessableEntity(message, code, errors) {
    return new AppError(422, message, code, errors);
  }
}
