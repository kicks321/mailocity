import React from 'react';
import { BaseNavigatorScreenParams } from '@Types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenView } from '../Base/BaseScreen.view';
import { Button, Title } from 'react-native-paper';
import { useSignInViewModel } from '@ViewModels';
import { Block } from '@Components';

type SignInScreenProps = NativeStackScreenProps<BaseNavigatorScreenParams>;

const SignInScreen: React.FunctionComponent<SignInScreenProps> = (props) => {
    const ViewModel = useSignInViewModel({ navigation: props.navigation });

    return (
        <ScreenView>
            <Block style={{ borderRadius: 1, borderWidth: 1, borderColor: 'red' }}>
                <Title>Sign In Screen</Title>
                <Button onPress={() => ViewModel.handleOnNavigate()}>Sign Up</Button>
            </Block>
        </ScreenView>
    );
};

export default SignInScreen;
