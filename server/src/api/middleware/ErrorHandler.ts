import { APIError, ErrorCodes, ErrorStatus } from '@/types';
import { isCelebrateError } from 'celebrate';

export const ErrorHandler = (err: any, req: any, res: any, next: any) => {
    const error: APIError = {
        status: undefined,
        message: '',
        source: req.originalUrl,
        errors: [],
    };

    if (isCelebrateError(err)) {
        error.status = ErrorStatus.BAD_REQUEST;
        error.message = 'Missing fields required';
        if (err.details) {
            err.details.forEach((err) => {
                error.errors.push({
                    code: ErrorCodes.MISSING_FIELD,
                    details: err.message.replace(/"/g, ''),
                });
            });
        }
    } else {
        console.log(err);
    }

    return res.status(ErrorStatus.BAD_REQUEST).json(err);
};
