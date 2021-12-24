import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';

interface Props {
    children?: React.ReactNode;
}

const ContainerProvider: React.FC<Props> = (props: Props): JSX.Element => {
    return <SafeAreaView>{props.children}</SafeAreaView>;
};

const styles = StyleSheet.create({
    container: {
        width: widthPercentageToDP(100),
    },
});

export default ContainerProvider;
