import React from 'react';
import { ImageSourcePropType } from 'react-native';
import Image, { BackgroundImageProps } from './Image/Image.component';
import Video, { BackgroundVideoProps } from './Video/Video.component';

export interface BackgroundProps {
    children?: React.ReactNode;
    source: ImageSourcePropType;
}

export interface BackgroundComponent {
    Video: React.FC<BackgroundVideoProps>;
    Image: React.FC<BackgroundImageProps>;
}

const Background: BackgroundComponent = {
    Video: Video,
    Image: Image,
};

export default Background;
