import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
   itemWrapper: {
      marginBottom: 25,
      alignItems: 'center',
      justifyContent: 'space-between',
      width: 350,
      height: 300
   },
   itemInnerWrapper: {
      width: 290,
      height: 130,
      marginTop: 5,
      paddingVertical: 10,
      paddingHorizontal: 10,
   },
   itemText: {
      fontSize: 16,
      lineHeight: 23,
      textAlign: 'justify'
   },
   btnWrapper: {
      width: 250,
      marginBottom: 50,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
   },
   viewDocIcon: {
      width: 40,
      height: 40
   },
   addCommentIcon: {
      width: 45,
      height: 45
   },
   editIcon: {
      width: 40,
      height: 40
   },
   deleteIcon: {
      width: 40,
      height: 40
   },
});
