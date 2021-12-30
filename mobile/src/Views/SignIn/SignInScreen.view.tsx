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
            <Block>
                <Title style={{ color: '#f5f' }}>Hello</Title>
                <Button onPress={() => ViewModel.handleOnNavigate()} mode="contained">
                    Click me!
                </Button>
            </Block>
        </ScreenView>
    );
};

export default SignInScreen;
