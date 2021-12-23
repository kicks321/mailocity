import { useDispatch } from 'react-redux';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BaseNavigatorScreenParams } from '@Types';
import { BaseScreenViewModelParams } from '../Base/BaseScreen.viewModel';

interface SignUpViewModelParams extends BaseScreenViewModelParams {
    navigation: NativeStackNavigationProp<BaseNavigatorScreenParams>;
}

interface SignUpViewModel {
    handleOnNavigate: () => void;
}

const useSignUpViewModel = (params: SignUpViewModelParams): SignUpViewModel => {
    const dispatch = useDispatch();

    const handleOnNavigate = (): void => {
        console.log('Hitting the Sign Up hook');
        params.navigation.navigate('SignIn');
        return;
    };

    return {
        handleOnNavigate: handleOnNavigate,
    };
};

export default useSignUpViewModel;
