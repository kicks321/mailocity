import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Styles = StyleSheet.create({
    /** ------------------ Screen styles ------------------ */
    imageBackgroundStyle: {
        flex: 1,
        width: wp(100),
        justifyContent: 'center',
        overflow: 'hidden',
    },
});

export default {
    ...Styles,
    wp,
    hp,
};
