import React from 'react';
import { AppState } from '@/Types';
import { useDispatch, useSelector } from 'react-redux';
import { setUserState } from '../../Store/Actions/State.actions';
import ACTION_TYPES from '../../Store/ActionTypes';

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

    return (
        <div>
            <button
                style={{ width: 20, backgroundColor: 'red' }}
                onClick={handleOnClick}
            >{`Press me - ${count}`}</button>
        </div>
    );
};

export default Button;
