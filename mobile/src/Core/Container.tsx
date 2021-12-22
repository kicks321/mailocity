import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

interface Props {
    children?: React.ReactNode;
}

const ContainerProvider: React.FC<Props> = (props: Props): JSX.Element => {
    return <SafeAreaView style={styles.container}>{props.children}</SafeAreaView>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default ContainerProvider;
