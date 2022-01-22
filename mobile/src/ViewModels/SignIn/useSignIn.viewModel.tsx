import { useDispatch } from 'react-redux';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BaseNavigatorScreenParams } from '@Types';
import { BaseScreenViewModelParams } from '../Base/BaseScreen.viewModel';
import API from 'src/API';

interface SignInViewModelParams extends BaseScreenViewModelParams {
    navigation: NativeStackNavigationProp<BaseNavigatorScreenParams>;
}

interface SignInViewModel {
    handleOnNavigate: () => void;
    handleOnSubmit: (values: FormValues) => Promise<any>;
}

interface FormValues {
    username?: string;
    password?: string;
}

const useSignInViewModel = (params: SignInViewModelParams): SignInViewModel => {
    const dispatch = useDispatch();

    const handleOnNavigate = (): void => {
        console.log('Hitting the Sign In hook');
        params.navigation.navigate('SignUp');
        return;
    };

    const handleOnSubmit = async (values: FormValues): Promise<any> => {
        const body = {
            username: values.username,
            password: values.password,
        };

        console.log(body);

        const res = await API.post('/auth/signin', body).catch((err: any) => {
            console.error(err.response.data);
        });
        return res;
    };

    return {
        handleOnNavigate: handleOnNavigate,
        handleOnSubmit: handleOnSubmit,
    };
};

export default useSignInViewModel;
