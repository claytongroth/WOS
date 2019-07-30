import React from 'react';
import { ScrollView, StyleSheet, Text, View, Button, TextInput, Keyboard, TouchableOpacity } from 'react-native';

export default class ViewClimbScreen extends React.Component {
  static navigationOptions = {
    title: 'View',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text>Image of Route Here</Text>

      </View>
    );
  }
}

handleImgDownload = () => {
 //firebase
 //     .storage()
 //     .ref('/uploadOk.jpeg')
 //     .downloadFile(
 //       `${firebase.storage.Native.DOCUMENT_DIRECTORY_PATH}/ok.jpeg`
 //     )
 //     .then(successCb)
 //     .catch(failureCb);
      
}

const styles = StyleSheet.create({

});
