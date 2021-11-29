import { APIError, ErrorCodes, ErrorStatus } from '@/types';
import { errors, isCelebrateError } from 'celebrate';

export const ErrorHandler = (err: any, req: any, res: any, next: any) => {
  const error: APIError = {
    status: undefined,
    errors: [],
  };

  if (isCelebrateError(err)) {
    if (err.details) {
      error.status = ErrorStatus.BAD_REQUEST;
      err.details.forEach(err => {
        error.errors.push({
          code: ErrorCodes.MISSING_FIELD,
          message: err.message.replace(/"/g, ''),
          source: req.originalUrl,
        });
      });
    }

    return res.status(ErrorStatus.BAD_REQUEST).json({ ...error });
  }

  return res.status(ErrorStatus.BAD_REQUEST).json(err.message);
};
