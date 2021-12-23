import React from 'react';
import { default as RNVideo } from 'react-native-video';
import Styles from './Styles';

interface VideoProps {
    children?: React.ReactNode;
}

const Video: React.FunctionComponent<VideoProps> = (props) => {
    return (
        <RNVideo
            source={require('./../assets/video1.mp4')}
            style={Styles.videoBackgroundStyle}
            muted={true}
            repeat={true}
            resizeMode={'cover'}
            rate={1.0}
            ignoreSilentSwitch={'obey'}
        >
            {props.children}
        </RNVideo>
    );
};

export default Video;
