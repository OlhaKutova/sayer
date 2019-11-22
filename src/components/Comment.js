import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux';
import {deleteComment} from '../redux/actionCreators/itemsActions';
import {styles} from '../styles/commentStyles';


class Comment extends Component {
   onDeleteComment = () => {
      const {itemId, data, deleteComment} = this.props;
      deleteComment(itemId, data.id)
   };

   render() {
      const {commentText} = this.props.data;
      return (
         <View style={styles.wrapper}>
            <Text style={styles.itemText}>
               {commentText}
            </Text>
            <TouchableOpacity
               onPress={this.onDeleteComment}
               style={styles.btnWrapper}
            >
               <Image
                  source={require('../../assets/images/delete.png')}
                  style={styles.commentIcon}
               />
            </TouchableOpacity>
         </View>
      );
   }
}

export default connect(null, {deleteComment})(Comment);
