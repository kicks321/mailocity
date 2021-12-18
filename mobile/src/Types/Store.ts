import ACTION_TYPES from '@/Store/ActionTypes';

export type AppState = {
    readonly _persist: unknown;
    readonly userState: UserState;
};

export type UserState = {
    state: ACTION_TYPES;
    profile?: {
        firstName?: string;
        lastName?: string;
        email?: string;
    };
};

export type SetUserState = {
    type: ACTION_TYPES;
    payload?: UserState;
};
