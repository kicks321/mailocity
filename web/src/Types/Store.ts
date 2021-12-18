import ACTION_TYPES from '@/Redux/ActionTypes';

export type AppState = {
    readonly _persist: unknown;
    readonly authenticationState: ACTION_TYPES;
};

export type StateData = {
    profile: {
        firstName: string;
        lastName: string;
        email: string;
    };
};

export type SetAppState = {
    type: ACTION_TYPES;
    payload?: StateData;
};
