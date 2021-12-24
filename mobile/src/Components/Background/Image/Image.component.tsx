import React from 'react';
import { View, ImageBackground, ImageResizeMode, StyleProp, ViewStyle } from 'react-native';
import { BackgroundProps } from '../Background.component';
import Styles from './Styles';

export interface BackgroundImageProps extends BackgroundProps {
    resizeMode?: ImageResizeMode;
    containerStyle?: StyleProp<ViewStyle> | StyleProp<ViewStyle>[];
    imageStyle?: StyleProp<ViewStyle> | StyleProp<ViewStyle>[];
}

const Image: React.FunctionComponent<BackgroundImageProps> = (props) => {
    // Default props
    props = {
        ...props,
        resizeMode: 'cover',
    };

    return (
        <ImageBackground
            resizeMode={props.resizeMode}
            source={props.source}
            style={[Styles.imageBackgroundStyle, props.imageStyle]}
        >
            {props.children}
        </ImageBackground>
    );
};

export default Image;
