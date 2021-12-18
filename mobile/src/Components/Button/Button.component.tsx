import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TouchableOpacity } from 'react-native';
import { AppState } from '@/Types';
import { setUserState } from '../../Store/Actions/State.actions';
import ACTION_TYPES from '../../Store/ActionTypes';

const Button = (): JSX.Element => {
    const { userState } = useSelector((state: AppState) => state);
    const dispatch = useDispatch();
    const [count, setCount] = React.useState(0);

    const handleOnPress = () => {
        if (userState.state === ACTION_TYPES.AUTHENTICATED) {
            dispatch(setUserState(ACTION_TYPES.UNAUTHENTICATED));
        } else {
            dispatch(setUserState(ACTION_TYPES.AUTHENTICATED));
        }

        setCount(count + 1);
    };

    return (
        <TouchableOpacity onPress={handleOnPress}>
            <Text style={{ fontSize: 15, color: 'red' }}>Press Me</Text>
            <Text style={{ color: 'blue' }}>{count}</Text>
            <Text style={{ marginVertical: 300 }}>{userState.state}</Text>
        </TouchableOpacity>
    );
};

export default Button;
