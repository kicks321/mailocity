import React from 'react';
import { ImageSourcePropType } from 'react-native';
import Image, { BackgroundImageProps } from './Image/Image.component';

export interface BackgroundProps {
    children?: React.ReactNode;
    source: ImageSourcePropType;
}

export interface BackgroundComponent {
    Image: React.FC<BackgroundImageProps>;
}

const Background: BackgroundComponent = {
    Image: Image,
};

export default Background;
