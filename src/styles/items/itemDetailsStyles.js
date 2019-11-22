import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
   wrapper: {
      alignItems: 'center',
      marginTop: 40,
   },
   content: {
      width: width * 0.9,
   },
});
