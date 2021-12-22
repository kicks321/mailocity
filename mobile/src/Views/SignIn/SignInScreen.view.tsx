import React from 'react';
import { BaseNavigatorScreenParams } from '@Types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenView } from '../Base/BaseScreen.view';
import { Button, Title } from 'react-native-paper';

type SignInScreenProps = NativeStackScreenProps<BaseNavigatorScreenParams>;

const SignInScreen: React.FunctionComponent<SignInScreenProps> = (props) => {
    return (
        <ScreenView>
            <Title>Sign In Screen</Title>
            <Button onPress={() => props.navigation.navigate('SignUp')}>Sign Up</Button>
        </ScreenView>
    );
};

export default SignInScreen;
