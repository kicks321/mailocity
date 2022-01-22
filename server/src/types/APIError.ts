export type Error = {
    code?: ErrorCodes;
    details?: string;
};

export enum ErrorCodes {
    MISSING_FIELD = '100',
    METHOD_NOT_ALLOWED = '101',
}

export enum ErrorStatus {
    BAD_REQUEST = 400,
    AUTHENTICATION_FAILED = 401,
    ACCESS_DENIED = 403,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    UNSUPPORTED_HEADER_ACCEPT = 406,
    UNSUPPORTED_HEADER_CONTENT = 415,
    RATE_LIMIT_EXCEEDED = 439,
    INTERNAL_SERVER_ERROR = 500,
    CONFLICTING_STATE = 409,
}

export type APIError = {
    status: ErrorStatus;
    message: string;
    source: string;
    errors: Error[];
};
