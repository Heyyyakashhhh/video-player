class ApiError extends Error {
  constructor(statusCode, msg = "Something went wrong", err = [], stack = "") {
    super(msg);
    ((this.msg = msg),
      (this.err = err),
      (this.data = null),
      (this.success = false),
      (this.statusCode = statusCode));

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
