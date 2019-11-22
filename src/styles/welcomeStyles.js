import {Dimensions, StyleSheet} from 'react-native';
import {palette} from './palette';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
   container: {
      flex: 1
   },
   wrapper: {
      alignItems: 'center',
   },
   content: {
      width: width * 0.9,
      marginTop: 20,
   },
   contentWrapper: {
      alignItems: 'center',
      marginBottom: 20,
   },
   contentText: {
      marginBottom: 20,
      textAlign: 'justify',
      fontSize: 17,
      letterSpacing: 1,
      lineHeight: 23,
      color: palette.mineShaft
   },
   contentImg: {
      height: 200,
      width: 200,
      borderRadius: 5
   },
   btn: {
      width: 300,
      alignSelf: 'center',
      alignItems: 'center',
      backgroundColor: palette.blueZodiac,
      borderRadius: 5,
      marginTop: 20,
      marginBottom: 30
   },
   btnText: {
      textTransform: 'uppercase',
      width: 300,
      textAlign: 'center',
      paddingVertical: 20,
      color: palette.coconutCream,
      fontSize: 17,
      letterSpacing: 1,
      lineHeight: 23,
   },
});
