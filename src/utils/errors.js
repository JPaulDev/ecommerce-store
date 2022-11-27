export default class AppError extends Error {
  constructor(status, message, code, data) {
    super(message);
    this.status = status;
    this.code = code;
    this.data = data;
  }

  static badRequest(message, code, data) {
    return new AppError(400, message, code, data);
  }

  static unauthorized(message, code, data) {
    return new AppError(401, message, code, data);
  }

  static forbidden(message, code, data) {
    return new AppError(403, message, code, data);
  }

  static notFound(message, code, data) {
    return new AppError(404, message, code, data);
  }

  static unprocessableEntity(message, code, data) {
    return new AppError(422, message, code, data);
  }
}
