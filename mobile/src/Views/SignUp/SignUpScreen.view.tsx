import React from 'react';
import { BaseNavigatorScreenParams } from '@Types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenView } from '../Base/BaseScreen.view';
import { Button, Title } from 'react-native-paper';
import { useSignUpViewModel } from '@ViewModels';

type SignUpScreenProps = NativeStackScreenProps<BaseNavigatorScreenParams>;

const SignUpScreen: React.FunctionComponent<SignUpScreenProps> = (props) => {
    const ViewModel = useSignUpViewModel({ navigation: props.navigation });

    return (
        <ScreenView>
            <Title>Sign Up Screen</Title>
            <Button onPress={() => ViewModel.handleOnNavigate()}>Sign In</Button>
        </ScreenView>
    );
};

export default SignUpScreen;
