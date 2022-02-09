import React from 'react';
import { ViewStyle } from 'react-native';
import * as Animatable from 'react-native-animatable';
import BaseStyles from './BaseStyles';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ScreenViewProps {
    children?: React.ReactNode;
    image?: boolean;
    duration?: number;
    style?: ViewStyle | ViewStyle[];
}

export const ScreenView: React.FunctionComponent<ScreenViewProps> = (props) => {
    return (
<<<<<<< HEAD
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
=======
        <SafeAreaView style={(BaseStyles.screenColorStyle, { flex: 1 })}>
            <Animatable.View
                duration={props.duration || 500}
                style={[BaseStyles.screenLayoutStyle, BaseStyles.screenColorStyle, props.style]}
            >
                {props.children}
            </Animatable.View>
        </SafeAreaView>
>>>>>>> e12791886ab00f1aa5093275a390a9a82f6a13e3
    );
};
