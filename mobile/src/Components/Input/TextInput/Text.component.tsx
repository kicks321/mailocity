import React from 'react';
import { TextInputProps } from 'react-native-paper/lib/typescript/components/TextInput/TextInput';

interface InputTextProps extends TextInputProps {
    error?: boolean | undefined;
    errorText?: string | undefined;
}

const TextInput: React.FunctionComponent<InputTextProps> = () => {
    return <React.Fragment></React.Fragment>;
};

export default TextInput;
