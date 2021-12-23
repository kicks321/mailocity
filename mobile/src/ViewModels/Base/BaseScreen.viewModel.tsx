import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BaseNavigatorScreenParams } from '@Types';

export interface BaseScreenViewModelParams {
    navigation: NativeStackNavigationProp<BaseNavigatorScreenParams>;
}
