import { Action, Reducer } from 'redux';
import { userStateReducer } from './State.reducers';
import { AppState } from '@/Types';

/**
 * A list of all app state reducers. These are functions that take actions and your previous app state, and calculate out
 * the next app state. Reducers have to be pure functions. Reducers run in their order in this array (This won't matter all that much).
 */
// eslint-disable-next-line no-unused-vars
const reducers: Array<(state: AppState, action: Action) => AppState> = [
    // Global Actions
    userStateReducer,
];

const RootReducer: Reducer<AppState> = (state, action) =>
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    reducers.reduce((running, next) => next(running, action), state!);

export default RootReducer;
