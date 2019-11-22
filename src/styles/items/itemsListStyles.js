import {Dimensions, StyleSheet} from 'react-native';
import {palette} from '../palette';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
   wrapper: {
      alignItems: 'center',
   },
   content: {
      width: width * 0.9,
      marginTop: 10,
   },
   contentWrapper: {
      marginBottom: 10,
   },
   itemsWrapper: {
      alignItems: 'center'
   },
   addNewItemsContent: {
      width: 365,
      marginBottom: 10,
      flexDirection: 'row',
      justifyContent: 'flex-end',
   },
   addItemIcon: {
      width: 80,
      height: 80
   },
   emptyContentText: {
      marginTop: 40,
      marginBottom: 20,
      textTransform: 'uppercase',
      alignSelf: 'center',
      textAlign: 'justify',
      color: palette.blueZodiac,
      fontSize: 25,
      letterSpacing: 2,
      lineHeight: 23
   },
   addNewItemsEmptyContent: {
      alignItems: 'center'
   },
   addItemIconEmptyContent: {
      width: 180,
      height: 180
   },
});
