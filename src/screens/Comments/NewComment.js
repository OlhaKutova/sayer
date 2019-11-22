import React, {Component} from 'react';
import {TouchableOpacity, View, TextInput, Image, Text} from 'react-native';
import {connect} from 'react-redux';
import {addComment} from '../../redux/actionCreators/itemsActions';
import {styles} from '../../styles/items/newItemStyles';

class NewComment extends Component {
   state = {
      text: '',
      errorInput: false
   };

   onAddCommentPressed = () => {
      if (this.state.text.trim()) {
         this.props.addComment(this.state.text, this.props.navigation.state.params.itemId);
         this.props.navigation.goBack();
      } else {
         this.setState({
            errorInput: true
         })
      }
   };

   renderErrorInputMessage = () => {
      return (
         <View style={styles.errorMessageWrapper}>
            <Text style={styles.errorMessageText}>
               To add comment please enter text
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
                     placeholder='add comment'
                     value={this.state.text}
                  />
                  <TouchableOpacity onPress={this.onAddCommentPressed}>
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

export default connect(mapStateToProps, {addComment})(NewComment);
