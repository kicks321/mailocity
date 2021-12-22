import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Styles = StyleSheet.create({
    /** ------------------ Screen styles ------------------ */
    screenLayoutStyle: {
        flex: 1,
        width: wp(100),
        height: hp(100),
        alignItems: 'center',
    },
});

export default {
    ...Styles,
    wp,
    hp,
};
