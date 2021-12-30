import { Theme } from '@Core';
import React from 'react';
import { TextInput as PaperTextInput, HelperText } from 'react-native-paper';
import { TextInputProps } from 'react-native-paper/lib/typescript/components/TextInput/TextInput';

interface InputTextProps extends TextInputProps {
    error?: boolean | undefined;
    errorText?: string | undefined;
}

const TextInput: React.FunctionComponent<InputTextProps> = (props) => {
    return (
        <React.Fragment>
            <PaperTextInput theme={Theme} />
        </React.Fragment>
    );
};

export default TextInput;
