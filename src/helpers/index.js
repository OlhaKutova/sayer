import AsyncStorage from '@react-native-community/async-storage';

export const sortItems = (itemA, itemB) => {
   return itemB.date - itemA.date
};

export const saveItems = async (items) => {
   try {
      await AsyncStorage.setItem('@items', JSON.stringify(items))
   } catch (e) {
      console.warn('saving error')
   }
};


export const getItems = async () => {
   try {
      const data = JSON.parse(await AsyncStorage.getItem('@items')) || [];
      return data;
   } catch (e) {
      console.warn('getting data error')
   }
};
