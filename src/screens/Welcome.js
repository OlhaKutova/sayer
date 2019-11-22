import React, {Component} from 'react';
import {ScrollView, View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import {styles} from '../styles/welcomeStyles';

class Welcome extends Component {
   handlePress = () => {
      this.props.navigation.navigate('AppInner')
   };

   renderContent = () => {
      return (
         <View style={styles.contentWrapper}>
            <Text style={styles.contentText}>
               Using this app you can add your own items, add comments and delete them.
            </Text>
            <Image
               source={require('../../assets/images/list.png')}
               style={styles.contentImg}
               resizeMode="cover"
            />
         </View>
      )
   };

   render() {
      return (
         <SafeAreaView style={styles.container}>
            <ScrollView>
               <View style={styles.wrapper}>
                  <View style={styles.content}>
                     {this.renderContent()}
                     <TouchableOpacity
                        style={styles.btn}
                        onPress={this.handlePress}
                     >
                        <Text style={styles.btnText}>
                           Start work with items
                        </Text>
                     </TouchableOpacity>
                  </View>
               </View>
            </ScrollView>
         </SafeAreaView>
      );
   }
}

export default Welcome;
