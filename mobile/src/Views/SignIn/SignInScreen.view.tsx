import React from 'react';
import { BaseNavigatorScreenParams } from '@Types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenView } from '../Base/BaseScreen.view';
import { Button, Title } from 'react-native-paper';
import { useSignInViewModel } from '@ViewModels';
import { Block, Label } from '@Components';

type SignInScreenProps = NativeStackScreenProps<BaseNavigatorScreenParams>;

const SignInScreen: React.FunctionComponent<SignInScreenProps> = (props) => {
    const ViewModel = useSignInViewModel({ navigation: props.navigation });

    return (
        <ScreenView image>
            <Block>
                <Title style={{ color: '#fff' }}>Sign In</Title>
                <Button onPress={() => ViewModel.handleOnNavigate()} mode="contained">
                    Sign Up!
                </Button>
                <Label onPress={() => console.log('Hello')}>Forgot Password?</Label>
            </Block>
        </ScreenView>
    );
};

export default SignInScreen;
