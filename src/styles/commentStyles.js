import {StyleSheet} from 'react-native';
import {palette} from './palette';

export const styles = StyleSheet.create({
   wrapper: {
      width: 270,
      minHeight: 80,
      marginRight: 15,
      marginBottom: 20,
      paddingHorizontal: 10,
      paddingVertical: 7,
      alignSelf: 'flex-end',
      justifyContent: 'space-between',
      backgroundColor: palette.aliceBlue,
      borderWidth: 3,
      borderRadius: 5,
      borderColor: palette.jungleMist,
   },
   itemText: {
      minHeight: 20,
      fontSize: 16,
      textAlign: 'justify'
   },
   btnWrapper: {
      flexDirection: 'row',
      alignSelf: 'flex-end',
      justifyContent: 'space-between',
      alignItems: 'center'
   },
   commentIcon: {
      width: 30,
      height: 30
   },
});
