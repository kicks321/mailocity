import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import BaseStyles from './BaseStyles';

interface ScreenViewProps {
    children?: React.ReactNode;
    duration?: number;
}

export const ScreenView: React.FunctionComponent<ScreenViewProps> = (props) => {
    return (
        <Animatable.View duration={props.duration || 500} style={BaseStyles.screenLayoutStyle}>
            <StatusBar style="auto" />
            {props.children}
        </Animatable.View>
    );
};
