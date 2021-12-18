import { Middleware } from 'redux';

/**
 * A middleware function that is used in place of the logging middleware when not in devMode.
 */

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
const noOpMiddleware: Middleware = () => (next) => (action) => next(action);

export default noOpMiddleware;
