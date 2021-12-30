import React from 'react';
import { ImageSourcePropType } from 'react-native';

export interface InputProps {
    children?: React.ReactNode;
    source: ImageSourcePropType;
}

export interface InputComponent {
    Text: React.FC<BackgroundVideoProps>;
}

const Input: InputComponent = {};

export default Background;
