import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Styles = StyleSheet.create({
    /** ------------------ Label styles ------------------ */
    labelContainerStyle: {
        justifyContent: 'center',
        textAlign: 'center',
    },
    labelDefaultTextStyle: {
        fontSize: hp(2),
        color: '#fff',
        fontWeight: '900',
    },
});

export default {
    ...Styles,
    wp,
    hp,
};
