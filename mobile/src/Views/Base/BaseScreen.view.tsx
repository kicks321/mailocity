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
        <SafeAreaView>
            <Animatable.View
                duration={props.duration || 500}
                style={[BaseStyles.screenLayoutStyle, BaseStyles.screenColorStyle, props.style]}
            >
                {props.children}
            </Animatable.View>
        </SafeAreaView>
    );
};
