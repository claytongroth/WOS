import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import firebase from 'react-native-firebase';
// import Login from './screens/Login';


//TODO get Login screen to precede app

class App extends React.Component {
  constructor() {
    super();
    this.unsubscriber = null
    this.state = {
        user : null
    };
  }
  async componentDidMount() {
    this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
        this.setState({ user })
    })
  }
  componentWillMount() {
    if (this.unsubscriber) {
        this.unsubscriber();
    }
  }
  render() {
    // if (!this.state.user) {
    //   // TODO get login to actually precede app
    //   return <Login navigation={navigation}/>
    // }
    return (
      <View 
        style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    height: 120,
    marginBottom: 16,
    marginTop: 64,
    padding: 10,
    width: 135,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  modules: {
    margin: 20,
  },
  modulesHeader: {
    fontSize: 16,
    marginBottom: 8,
  },
  module: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  }
});
