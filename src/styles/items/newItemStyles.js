import {Dimensions, StyleSheet} from 'react-native';
import {palette} from '../palette';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
   wrapper: {
      alignItems: 'center',
   },
   content: {
      width: width * 0.9,
      marginTop: 20
   },
   inputWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around'
   },
   input: {
      height: 50,
      width: '85%',
      borderBottomWidth: 1
   },
   borderGray: {
      borderBottomColor: palette.mineShaft,
   },
   borderRed: {
      borderBottomColor: palette.tamarillo,
   },
   inputImg: {
      width: 50,
      height: 50
   },
   contentImg: {
      marginTop: 50,
      width: 150,
      height: 150,
      alignSelf: 'center'
   },
   errorMessageWrapper: {
      marginTop: 7
   },
   errorMessageText: {
      fontSize: 16,
      letterSpacing: 1,
      color: palette.tamarillo
   },
});
