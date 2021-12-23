import React from 'react';
import { BaseNavigatorScreenParams } from '@Types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenView } from '../Base/BaseScreen.view';
import { Button, TextInput, Title } from 'react-native-paper';
import { useSignInViewModel } from '@ViewModels';
import { widthPercentageToDP } from 'react-native-responsive-screen';

type SignInScreenProps = NativeStackScreenProps<BaseNavigatorScreenParams>;

const SignInScreen: React.FunctionComponent<SignInScreenProps> = (props) => {
    const { handleOnNavigate } = useSignInViewModel({ navigation: props.navigation });

    return (
        <ScreenView>
            <Title>Sign In Screen</Title>
            <Button onPress={() => handleOnNavigate()}>Sign Up</Button>
        </ScreenView>
    );
};

export default SignInScreen;
