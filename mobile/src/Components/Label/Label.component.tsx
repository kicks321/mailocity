import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import Styles from './Styles';

interface LabelProps {
    children?: React.ReactNode;
    style?: StyleProp<TextStyle> | StyleProp<TextStyle>[] | undefined;
    onPress?: () => void | undefined;
}

const Label: React.FunctionComponent<LabelProps> = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={Styles.labelContainerStyle}>
            <Text style={[Styles.labelDefaultTextStyle, props.style]}>{props.children}</Text>
        </TouchableOpacity>
    );
};

export default Label;
