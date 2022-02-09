import React from 'react';
import { SafeAreaView, ViewStyle } from 'react-native';
import * as Animatable from 'react-native-animatable';
import BaseStyles from './BaseStyles';
import { Background } from '@Components';

interface ScreenViewProps {
    children?: React.ReactNode;
    image?: boolean;
    duration?: number;
    style?: ViewStyle | ViewStyle[];
}

export const ScreenView: React.FunctionComponent<ScreenViewProps> = (props) => {
    return (
        <Animatable.View
            duration={props.duration || 500}
            style={[BaseStyles.screenLayoutStyle, BaseStyles.screenColorStyle, props.style]}
        >
            {props.image ? (
                <Background.Image source={require('../../../assets/img/bg-sign-in-4.jpg')}>
                    <SafeAreaView />
                    {props.children}
                    <SafeAreaView />
                </Background.Image>
            ) : (
                <React.Fragment>
                    <SafeAreaView />
                    {props.children}
                    <SafeAreaView />
                </React.Fragment>
            )}
        </Animatable.View>
    );
};
