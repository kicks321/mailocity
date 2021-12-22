import React from 'react';
import { BaseNavigatorScreenParams } from '@Types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenView } from '../Base/BaseScreen.view';
import { Button, Title } from 'react-native-paper';

type SignUpScreenProps = NativeStackScreenProps<BaseNavigatorScreenParams>;

const SignUpScreen: React.FunctionComponent<SignUpScreenProps> = (props) => {
    return (
        <ScreenView>
            <Title>Sign Up Screen</Title>
            <Button onPress={() => props.navigation.navigate('SignIn')}>Sign In</Button>
        </ScreenView>
    );
};

export default SignUpScreen;
