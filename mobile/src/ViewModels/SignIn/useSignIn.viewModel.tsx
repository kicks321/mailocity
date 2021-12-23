import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BaseNavigatorScreenParams } from '@Types';
import { useDispatch } from 'react-redux';
import { BaseScreenViewModelParams } from '../Base/BaseScreen.viewModel';

interface SignInViewModelParams extends BaseScreenViewModelParams {
    navigation: NativeStackNavigationProp<BaseNavigatorScreenParams>;
}

interface SignInViewModel {
    handleOnNavigate: () => void;
}

const useSignInViewModel = (params: SignInViewModelParams): SignInViewModel => {
    const dispatch = useDispatch();

    const handleOnNavigate = (): void => {
        console.log('Hitting against the hook');
        params.navigation.navigate('SignUp');
        return;
    };

    return {
        handleOnNavigate: handleOnNavigate,
    };
};

export default useSignInViewModel;
