import React from 'react';
import { 
  ScrollView,
   StyleSheet,
   Text,
   View,
   Button,
   TextInput,
   Keyboard,
   TouchableOpacity
} from 'react-native';
import { Input } from 'react-native-elements'
import BrushText from '../components/BrushText'


export default class AddClimbScreen extends React.Component {
  constructor(props) {
  super(props);
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
  handleSubmit(){
    //
  }
  handleImageAdd(){
    //
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView>
        <Input label={"Climb Name"} errorMessage={"Name Invalid"} onChangeText={this.handleNameChange}/>
        <Input label={"Coordinates"} errorMessage={"Coordinates Invalid"} onChangeText={this.handleNameChange}/>
        <Input label={"Area"} errorMessage={"Area Invalid"} onChangeText={this.handleNameChange}/>
        <Input label={"Grade"} errorMessage={"Grade Invalid"} onChangeText={this.handleNameChange}/>      
        <Input label={"Notes"} errorMessage={"Notes Invalid"} onChangeText={this.handleNameChange}/>    
        <TouchableOpacity
          onPress={this.handleImageAdd}
        >
                    <View style={styles.brush}>
            <BrushText
              image= {
                 __DEV__
                  ? require('../assets/images/BrushMaroon.png')
                  : require('../assets/images/BrushMaroon.png')
              }
              text = "Select an Image"
              fsize = {30}
            />
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={{marginTop: 5}}
          onPress={() => navigate('Draw')}
        >
          <View style={styles.brush}>
            <BrushText
              image= {
                 __DEV__
                  ? require('../assets/images/BrushMoss.png')
                  : require('../assets/images/BrushMoss.png')
              }
              text = "Draw Climb"
              fsize = {30}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.saveButton}
          onPress={this.handleSubmit}
        >
          <Text style={styles.imageButtonText}>Submit</Text>   
        </TouchableOpacity>

      </ScrollView>
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
  brush: {
    height: 60,
    width: 350,
    resizeMode: 'contain'
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