import React, {Component} from 'react';
import {TouchableOpacity, View, Text, TextInput, Image} from 'react-native';
import {connect} from 'react-redux';
import {addItem} from '../../redux/actionCreators/itemsActions';
import {styles} from '../../styles/items/newItemStyles';

class NewItem extends Component {
   state = {
      text: '',
      errorInput: false
   };

   onAddItemPressed = () => {
      if (this.state.text.trim()) {
         this.props.addItem(this.state.text);
         this.props.navigation.navigate('ItemsList')
      } else {
         this.setState({
            errorInput: true
         })
      }
   };

   renderErrorInputMessage = () => {
      return (
         <View style={styles.errorMessageWrapper}>
            <Text  style={styles.errorMessageText}>
               To add item please enter text
            </Text>
         </View>
      )
   };

   changeTextHandler = text => {
      this.setState({
         text: text,
         errorInput: false
      });
   };

   render() {
      return (
         <View style={styles.wrapper}>
            <View style={styles.content}>
               <View style={styles.inputWrapper}>
                  <TextInput
                     style={[styles.input, this.state.errorInput ? styles.borderRed : styles.borderGray]}
                     onChangeText={this.changeTextHandler}
                     placeholder='New item title..'
                     placeholderTextColor='#333333'
                     value={this.state.text}
                  />
                  <TouchableOpacity onPress={this.onAddItemPressed}>
                     <Image
                        source={require('../../../assets/images/arrowAdd.png')}
                        style={styles.inputImg}
                        resizeMode="cover"
                     />
                  </TouchableOpacity>
               </View>
               {this.state.errorInput ? this.renderErrorInputMessage() : null}
            </View>
         </View>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      items: state.items
   }
};

export default connect(mapStateToProps, {addItem})(NewItem);
