import React from 'react';
import { BaseNavigatorScreenParams } from '@Types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenView } from '../Base/BaseScreen.view';
import { Button, Title } from 'react-native-paper';
import { useSignUpViewModel } from '@ViewModels';
import { Block } from '@Components';

type SignUpScreenProps = NativeStackScreenProps<BaseNavigatorScreenParams>;

const SignUpScreen: React.FunctionComponent<SignUpScreenProps> = (props) => {
    const ViewModel = useSignUpViewModel({ navigation: props.navigation });

    return (
        <ScreenView image>
            <Block>
                <Title style={{ color: '#fff' }}>Sign Up</Title>
                <Button onPress={() => ViewModel.handleOnNavigate()} mode="contained">
                    Sign In!
                </Button>
            </Block>
        </ScreenView>
    );
};

export default SignUpScreen;
