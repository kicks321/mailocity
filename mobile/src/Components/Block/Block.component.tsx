import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Styles from './Styles';

interface BlockComponentProps {
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle> | StyleProp<ViewStyle>[];
}

const Block: React.FunctionComponent<BlockComponentProps> = (props) => {
    return <View style={[Styles.blockLayoutStyle, props.style]}>{props.children}</View>;
};

export default Block;
