import React from 'react';
import { BaseNavigatorScreenParams } from '@Types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenView } from '../Base/BaseScreen.view';
import { Button, Paragraph, TextInput, Title } from 'react-native-paper';
import { useSignInViewModel } from '@ViewModels';
import { Block, Label } from '@Components';
import { View } from 'react-native';

type SignInScreenProps = NativeStackScreenProps<BaseNavigatorScreenParams>;

type FormValues = {
    username: string;
    password: string;
};

const SignInScreen: React.FunctionComponent<SignInScreenProps> = (props) => {
    const [formValues, setFormValues] = React.useState<FormValues>({
        username: '',
        password: '',
    });
    const [username, setUsername] = React.useState<string>();
    const [password, setPassword] = React.useState<string>();
    const ViewModel = useSignInViewModel({ navigation: props.navigation });

    const handleOnUsernameChange = (text: string) => {
        setUsername(text);
    };

    const handleOnPasswordChange = (text: string) => {
        setPassword(text);
    };

    const [token, setToken] = React.useState<string>();

    return (
        <ScreenView image>
            <Block>
                <Title style={{ color: '#fff' }}>Sign In</Title>
                {token && <Title style={{ color: '#fff' }}>{token}</Title>}
                <TextInput
                    value={username}
                    mode="outlined"
                    style={{ width: '100%' }}
                    onChangeText={(text) => handleOnUsernameChange(text)}
                />
                <TextInput
                    value={password}
                    mode="outlined"
                    style={{ width: '100%' }}
                    onChangeText={(text) => handleOnPasswordChange(text)}
                />
                <Button
                    onPress={async () => {
                        const res = await ViewModel.handleOnSubmit({
                            username: username,
                            password: password,
                        });
                        setToken(res.data.token);
                    }}
                    mode="contained"
                    style={{ backgroundColor: '#f4f' }}
                >
                    Sign In
                </Button>
                <Button onPress={() => ViewModel.handleOnNavigate()} mode="contained">
                    Sign Up!
                </Button>
                <Label onPress={() => console.log('Hello')}>Forgot Password?</Label>
            </Block>
        </ScreenView>
    );
};

export default SignInScreen;
