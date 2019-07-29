import React from 'react';
import { 
  ScrollView,
   StyleSheet,
   Text,
   View,
   Button,
   TextInput,
   Keyboard,
   TouchableOpacity,
   Picker
} from 'react-native';
import { Input, CheckBox, Icon } from 'react-native-elements'
import BrushText from '../components/BrushText'
import {bouldGrades, routeGrades} from '../constants/Grades'


export default class AddClimbScreen extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    name: '',
    location: [],
    area: '',
    grade: '',
    notes:'',
    isBoulder:true,
    checked: false

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
        <View style={{flex: 1, flexDirection: 'row'}}>
          <CheckBox
            style = {{flexGrow:1}}
            iconRight
            right = {true}
            title='Route'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={!this.state.isBoulder}
            onPress={()=>this.setState({isBoulder: !this.state.isBoulder})}
          />
          <CheckBox
            style = {{flexGrow:1}}
            iconRight
            title='Boulder'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={this.state.isBoulder}
            onPress={()=>this.setState({isBoulder: !this.state.isBoulder})}
          />
        </View>
        <Input label={"Coordinates"} errorMessage={"Coordinates Invalid"} onChangeText={this.handleNameChange}/>
        <Input label={"Area"} errorMessage={"Area Invalid"} onChangeText={this.handleNameChange}/>
        <Text>Grade</Text>
        <Picker
          selectedValue={bouldGrades[0]}
          style={{height: 50, width: '100%', backgroundColor:"rgba(252, 250, 249, 1)", border: "1px solid black" }}
          onValueChange={(itemValue, itemIndex) => this.setState({grade: itemValue})}
        >
          {this.state.isBoulder ? 
            bouldGrades.map(x => <Picker.Item key= {x} label={x} value={x} />) :
            routeGrades.map(x => <Picker.Item key={x} label={x} value={x} />)}
        </Picker>    
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
          style={{marginTop: 5}}
          onPress={this.handleSubmit}
        >
          <View style={styles.brush}>
            <BrushText
              image= {
                 __DEV__
                  ? require('../assets/images/BrushPurp.png')
                  : require('../assets/images/BrushPurp.png')
              }
              text = "Submit ✅"
              fsize = {30}
            />
          </View>
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