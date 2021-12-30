import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Styles = StyleSheet.create({
    /** ------------------ Screen styles ------------------ */
    screenLayoutContainerStyle: {
        flex: 1,
        backgroundColor: '#fff',
    },
    screenLayoutStyle: {
        flex: 1,
        maxWidth: wp(100),
        maxHeight: hp(100),
        alignItems: 'center',
    },
    screenColorStyle: {
        backgroundColor: '#fff',
    },
});

export default {
    ...Styles,
    wp,
    hp,
};
