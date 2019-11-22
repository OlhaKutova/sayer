import React, {Component} from 'react';
import {ScrollView, TouchableOpacity, Text, View, Image} from 'react-native';
import {connect} from 'react-redux';
import Item from '../../components/Item';
import {styles} from '../../styles/items/itemsListStyles';

class ItemsList extends Component {
   state = {
      items: true
   };

   render() {
      const renderItems = () => {
         return (
            <View style={styles.itemsWrapper}>
               <TouchableOpacity
                  onPress={() =>
                     this.props.navigation.navigate('NewItem')
                  }
                  style={styles.addNewItemsContent}
               >
                  <Image
                     source={require('../../../assets/images/addIcon.png')}
                     style={styles.addItemIcon}
                  />
               </TouchableOpacity>
               {this.props.items.map((item) => {
                  return (
                     <Item
                        key={item.id}
                        mode={'list'}
                        data={item}
                     />
                  )
               })
               }
            </View>
         )
      };

      const renderEmptyContent = () => {
         return (
            <TouchableOpacity
               onPress={() =>
                  this.props.navigation.navigate('NewItem')
               }
               style={styles.addNewItemsEmptyContent}
            >
               <Text style={styles.emptyContentText}>
                  Add new item
               </Text>
               <Image
                  source={require('../../../assets/images/addIcon.png')}
                  style={styles.addItemIconEmptyContent}
               />
            </TouchableOpacity>
         )
      };
      return (
         <ScrollView style={styles.contentWrapper}>
            <View style={styles.wrapper}>
               <View style={styles.content}>
                  {this.props.items.length > 0 ? renderItems() : renderEmptyContent()}
               </View>
            </View>
         </ScrollView>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      items: state.items
   }
};

export default connect(mapStateToProps, {})(ItemsList);
