import React from 'react';
import { ScrollView, StyleSheet, Text, View, Button, TextInput, Keyboard, TouchableOpacity } from 'react-native';

export default class AddClimbScreen extends React.Component {
  constructor(props) {
  super(props);
  this.ref = firebase.firestore().collection('climbs');
  this.state = {
    name: '',
    location: '',
    area: '',
    grade: '',
    notes:''

  }
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  static navigationOptions = {
    title: 'Add',
  };
  handleNameChange(name){
     this.setState({ name: name})
  }
  handleSubmit = () => {
    this.ref.add({
     ...state
    })
    this.setState({
     textInput: '',
    })
   
  }
  handleImageAdd(){
//    firebase
//        .storage
//        .ref('pathTo/uploadName.jpeg')
//        .putFile(
//            `${firebase.storage.Native.DOUMENT_DIRECTORY_PATH}/name.jpeg`
//        )
//       .then(successCb)
//        .catch(failureCb);
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Route name"
          maxLength={20}
          onBlur={Keyboard.dismiss}
          value={this.state.name}
          onChangeText={this.handleNameChange}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Coordinates"
          maxLength={20}
          onBlur={Keyboard.dismiss}
          value={this.state.location}
          onChangeText={this.handleNameChange}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Area"
          maxLength={20}
          onBlur={Keyboard.dismiss}
          value={this.state.area}
          onChangeText={this.handleNameChange}
        />
        <TextInput
          style={styles.textInput}
          placeholder="V7"
          maxLength={20}
          onBlur={Keyboard.dismiss}
          value={this.state.grade}
          onChangeText={this.handleNameChange}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Notes here..."
          maxLength={20}
          onBlur={Keyboard.dismiss}
          value={this.state.notes}
          onChangeText={this.handleNameChange}
        />
        <TouchableOpacity
          style={styles.imageButton}
          onPress={this.handleImageAdd}
        >
          <Text style={styles.imageButtonText}>Select an Image</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.saveButton}
          onPress={this.handleSubmit}
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
        <Button
          title="Draw Climb"
          onPress={() => navigate('Draw')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20
  },
  saveButton: {
    borderWidth: 1,
    borderColor: '#007BFF',
    backgroundColor: '#007BFF',
    padding: 15,
    margin: 5
  },
  imageButton: {
    borderWidth: 1,
    borderColor: '#007BFF',
    backgroundColor: '#7a306c',
    padding: 15,
    margin: 5
  },
  imageButtonText: {
    color: '#fcfaf9',
    fontSize: 20,
    textAlign: 'center'
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center'
  }
});
