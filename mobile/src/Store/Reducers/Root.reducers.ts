import { AppState } from '@Types';
import { Action, Reducer } from 'redux';
import { userStateReducer } from './State.reducers';

/**
 * A list of all app state reducers. These are functions that take actions and your previous app state, and calculate out
 * the next app state. Reducers have to be pure functions. Reducers run in their order in this array (This won't matter all that much).
 */
const reducers: Array<(state: AppState, action: Action) => AppState> = [
    // Global Actions
    userStateReducer,
];

const rootReducer: Reducer<AppState> = (state, action) =>
    reducers.reduce((running, next) => next(running, action), state);

export default rootReducer;
