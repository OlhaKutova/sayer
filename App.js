import React, {Component} from 'react';
import {
   createAppContainer,
   createSwitchNavigator,
   createStackNavigator,
} from 'react-navigation';
import {TouchableOpacity, View, Image} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {setInitialState} from './src/redux/actionCreators/itemsActions';
import {getItems} from './src/helpers';
import Welcome from './src/screens/Welcome';
import ItemsList from './src/screens/Items/ItemsList';
import NewItem from './src/screens/Items/NewItem';
import ItemDetails from './src/screens/Items/ItemDetails';
import NewComment from './src/screens/Comments/NewComment';
import {palette} from './src/styles/palette';

const AppInnerNavigator = createStackNavigator({
      ItemsList: {
         screen: ItemsList,
         navigationOptions: () => ({
            title: 'Items list',
            headerLeft: null,
            headerRight: null,
         }),
      },
      NewItem: {
         screen: NewItem,
         navigationOptions: () => ({
            title: 'Create new item'
         }),
      },
      ItemDetails: {
         screen: ItemDetails,
         navigationOptions: () => ({
            title: 'Item Details'
         }),
      },
      NewComment: {
         screen: NewComment,
         navigationOptions: () => ({
            title: 'Create new comment',
         }),
      }
   },
   {
      defaultNavigationOptions: ({navigation}) => ({
         headerLeft: () => (
            <TouchableOpacity
               onPress={() => navigation.goBack()}
            >
               <Image
                  source={require('./assets/images/arrowBack.png')}
                  style={{width: 60, height: 60, marginLeft: 10}}
               />
            </TouchableOpacity>
         ),
         headerRight: () => (
            <View style={{width: 40}}/>
         ),
         headerStyle: {
            backgroundColor: palette.blueZodiac,
            height: 120,
         },
         headerTintColor: palette.white,
         headerBackTitle: null,
         headerTitleStyle: {
            alignSelf: 'center',
            textAlign: 'center',
            flexGrow: 1,
            fontSize: 25,
            backgroundColor: palette.blueZodiac
         },
      })
   });

const AppNavigator = createSwitchNavigator({
   Welcome: {
      screen: Welcome,
      navigationOptions: () => ({
         title: 'Welcome',
      }),
   },
   AppInner: {
      screen: AppInnerNavigator,
   },
});

const Navigator = createAppContainer(AppNavigator);

export default class App extends Component {

   async componentDidMount() {
      const items = await getItems();
      store.dispatch(setInitialState(items))
   }

   render() {
      return (
         <Provider store={store}>
            <Navigator/>
         </Provider>
      );
   }
}
