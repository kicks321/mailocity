import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ViewStyle } from 'react-native';
import * as Animatable from 'react-native-animatable';
import BaseStyles from './BaseStyles';

interface ScreenViewProps {
    children?: React.ReactNode;
    duration?: number;
    style?: ViewStyle | ViewStyle[];
}

export const ScreenView: React.FunctionComponent<ScreenViewProps> = (props) => {
    return (
        <SafeAreaView style={BaseStyles.screenLayoutContainerStyle}>
            <Animatable.View
                duration={props.duration || 500}
                style={[BaseStyles.screenLayoutStyle, BaseStyles.screenColorStyle, props.style]}
            >
                <StatusBar style="dark" />
                {props.children}
            </Animatable.View>
        </SafeAreaView>
    );
};
