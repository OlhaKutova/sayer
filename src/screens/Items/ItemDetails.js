import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import {connect} from 'react-redux';
import Item from '../../components/Item';
import {styles} from '../../styles/items/itemDetailsStyles';

class ItemDetails extends Component {
   state = {
      item: {}
   };

   componentDidMount(): void {
      const {itemId} = this.props.navigation.state.params;
      this.setState({
         item: this.props.items.filter((item) => item.id === itemId)[0]
      })
   }

   render() {
      const {item} = this.state;
      return (
         <ScrollView style={styles.contentWrapper}>
            <View style={styles.wrapper}>
               <Item
                  key={item.id}
                  mode={'details'}
                  data={item}
               />
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

export default connect(mapStateToProps, {})(ItemDetails);
