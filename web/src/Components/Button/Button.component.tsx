import React from 'react';
import { AppState } from '@/Types';
import { useDispatch, useSelector } from 'react-redux';
import { setUserState } from '../../Store/Actions/State.actions';
import ACTION_TYPES from '../../Store/ActionTypes';
import { Button as MuiButton, Typography } from '@mui/material';

const Button = () => {
    const { userState } = useSelector((state: AppState) => state);
    const dispatch = useDispatch();
    const [count, setCount] = React.useState(0);

    const handleOnClick = () => {
        if (userState.state === ACTION_TYPES.AUTHENTICATED) {
            dispatch(setUserState(ACTION_TYPES.UNAUTHENTICATED));
        } else {
            dispatch(setUserState(ACTION_TYPES.AUTHENTICATED));
        }

        setCount(count + 1);
    };

    const changeTheme = () => {
        console.log('Change theme');
        dispatch(
            setUserState(userState.state || ACTION_TYPES.UNAUTHENTICATED, {
                mode: userState.mode === 'light' ? 'dark' : 'light',
            }),
        );
    };

    return (
        <div style={{ width: 100, justifyContent: 'center', alignItems: 'center' }}>
            <MuiButton variant="contained" onClick={handleOnClick}>
                Authenticate!
            </MuiButton>
            <Typography variant="h2">{userState.state}</Typography>
            <MuiButton variant="contained" onClick={changeTheme}>
                Change Theme!
            </MuiButton>
            <Typography variant="h2">
                {userState.mode === 'light' ? 'Light Mode' : 'Dark Mode'}
            </Typography>
        </div>
    );
};

export default Button;
