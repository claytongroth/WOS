import React from 'react';
import { ScrollView, StyleSheet, Text, View, Button, TextInput, Keyboard, TouchableOpacity } from 'react-native';

export default class ViewClimbScreen extends React.Component {
  static navigationOptions = {
    title: 'View',
  };

  // YO!!!!!! Can we pass the climb details from the other screen or does it make more sense to interact with FB again here?
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

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <View>
          <Img></Img>
        </View>
        <scrollView>
          <Text>this shows the details</Text>
        </scrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({

});
