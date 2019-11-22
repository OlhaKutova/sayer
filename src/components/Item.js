import React, {Component} from 'react';
import {withNavigation} from 'react-navigation';
import {Text, TouchableOpacity, ScrollView, View, Image, ImageBackground} from 'react-native';
import {connect} from 'react-redux';
import {deleteItem} from '../redux/actionCreators/itemsActions';
import Comment from './Comment';
import {styles} from '../styles/items/itemStyles';


class Item extends Component {
   onViewDetailsPress = () => {
      this.props.navigation.navigate('ItemDetails', {
         itemId: this.props.data.id
      })
   };
   onAddCommentPress = () => {
      this.props.navigation.navigate('NewComment', {
         itemId: this.props.data.id
      })
   };
   onDeleteItem = () => {
      if (this.props.mode === 'details') {
         this.props.navigation.navigate('ItemsList')
      }
      this.props.deleteItem(this.props.data.id)
   };
   renderItemButtons = () => {
      return (
         <View style={styles.btnWrapper}>
            <TouchableOpacity onPress={this.onViewDetailsPress}>
               <Image
                  source={require('../../assets/images/viewDoc.png')}
                  style={styles.viewDocIcon}
               />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onAddCommentPress}>
               <Image
                  source={require('../../assets/images/addComment.png')}
                  style={styles.addCommentIcon}
               />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onDeleteItem}>
               <Image
                  source={require('../../assets/images/delete.png')}
                  style={styles.deleteIcon}
               />
            </TouchableOpacity>
         </View>
      )
   };

   render() {
      const {data, mode} = this.props;
      const {comments = []} = data;
      return (
         <View key={data.id}>
            <ImageBackground
               key={data.id}
               source={require('../../assets/images/note.png')}
               style={styles.itemWrapper}
            >
               <ScrollView style={styles.itemInnerWrapper}
                           nestedScrollEnabled={true}
               >
                  <Text style={styles.itemText}>
                     {data.text}
                  </Text>
               </ScrollView>
               {this.renderItemButtons()}
            </ImageBackground>
            {comments.length > 0 && comments.map((comment, index) => {
               if (mode === 'list') {
                  if (index === 0) {
                     return <Comment
                        key={comment.id}
                        itemId={data.id}
                        data={comment}
                     />
                  } else {
                     return null;
                  }
               } else {
                  return <Comment
                     key={comment.id}
                     itemId={data.id}
                     data={comment}
                  />
               }
            })}
         </View>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      items: state.items
   }
};

export default connect(mapStateToProps, {deleteItem})(withNavigation(Item));
