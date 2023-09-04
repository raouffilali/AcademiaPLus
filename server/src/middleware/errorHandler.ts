import log4js from "log4js";

// Configure Log4js with your desired settings
log4js.configure({
  appenders: {
    errorFile: { type: "file", filename: "error.log" },
    console: { type: "console" },
  },
  categories: {
    default: { appenders: ["errorFile", "console"], level: "error" },
  },
});

// Get a logger instance
const logger = log4js.getLogger("error");

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorResponseHandler = (err, req, res, next) => {
  // Default to a 500 Internal Server Error if no status code is provided
  const statusCode = err.statusCode || 500;
  // Create a structured error response object
  const errorResponse = {
    message: err.message,
    errorCode: err.errorCode || "GENERIC_ERROR",
  };
  // Log the error using Log4js
  logger.error(err);

  // Determine if stack trace should be exposed based on environment
  const isProduction = process.env.NODE_ENV === "production";
  
  // Prepare the response object, optionally including the stack trace
  const responseToSend = isProduction
    ? errorResponse
    : {
        ...errorResponse,
        stack: err.stack,
      };

  // Send the response with the appropriate status code
  res.status(statusCode).json(responseToSend);
};

// Custom error class for endpoint not found
class NotFoundError extends Error {
  statusCode: number; // Add a statusCode property
  errorCode: string; // Add an errorCode property

  constructor(
    message = "Endpoint not found",
    statusCode = 404,
    errorCode = "NOT_FOUND_ERROR"
  ) {
    super(message);
    this.statusCode = statusCode;
    this.errorCode = errorCode; // Set the errorCode property
  }
}
// Middleware for handling "Endpoint not found" errors
const invalidPathHandler = (req, res, next) => {
  next(new NotFoundError("Endpoint not found", 404, "NOT_FOUND_ERROR"));
  // Pass the status code
};

export { errorResponseHandler, invalidPathHandler };
