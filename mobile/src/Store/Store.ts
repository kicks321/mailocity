import { AppState } from '@Types';
import { applyMiddleware, compose, createStore } from 'redux';
import DEFAULT_STATE from './AppState';
import { logger, noOpMiddleware } from './Middleware';
import { rootReducer } from './Reducers';

const isDevEnv = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const storeLogger = isDevEnv ? logger : noOpMiddleware;

const enhancers = compose(
    applyMiddleware(
        storeLogger, // Keep first to log all incoming actions unaltered by any subsequent middleware
    ),
);

const makeStore = (initialState: AppState) => createStore(rootReducer, initialState, enhancers);

// Store: Redux Store
const Store = makeStore(DEFAULT_STATE);

// Export indexer
export { Store };
