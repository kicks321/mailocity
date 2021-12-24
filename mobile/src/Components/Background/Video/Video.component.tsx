import React from 'react';
import Styles from './Styles';
import { Video as ExpoVideo } from 'expo-av';
import { Animated, StyleProp, ViewStyle } from 'react-native';
import { BackgroundProps } from '../Background.component';

export interface BackgroundVideoProps extends BackgroundProps {
    isMuted?: boolean;
    isLooping?: boolean;
    shouldPlay?: boolean;
    style?: StyleProp<ViewStyle> | StyleProp<ViewStyle>[];
}

const Video: React.FunctionComponent<BackgroundVideoProps> = (props) => {
    const video = React.useRef(null);
    const opacity = React.useMemo(() => new Animated.Value(0), []);

    // Default props
    props = {
        ...props,
        isMuted: true,
        isLooping: true,
        shouldPlay: true,
    };

    return (
        <ExpoVideo
            ref={video}
            style={[Styles.videoBackgroundStyle, props.style]}
            source={props.source}
            isMuted={props.isMuted}
            shouldPlay
            onLoad={() => {
                Animated.timing(opacity, {
                    toValue: 1,
                    useNativeDriver: true,
                }).start();
            }}
            resizeMode="cover"
            isLooping={props.isLooping}
        >
            {props.children}
        </ExpoVideo>
    );
};

export default Video;
