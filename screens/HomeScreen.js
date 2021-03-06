import React from 'react';
//import * as firebase from 'firebase';
// use require to force build order
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';
import BrushText from '../components/BrushText';
import firebase from 'react-native-firebase';
import Login from './Login';



export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.unsubscriber = null
    this.state = {
        user : null
    };
  }
  static navigationOptions = { 
    title: 'Home',
    header: null
  };
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
    const {navigation} = this.props;
    const {username} = "Clayton"  //${/*JSON.stringify(this.state.user.displayName, null, 2)*/}

    if (!this.state.user) {
      // TODO get login to actually precede app
      return <Login navigation={navigation}/>
    }
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.brush}>
            <BrushText
              image= {
                 __DEV__
                  ? require('../assets/images/BrushCoral.png')
                  : require('../assets/images/BrushCoral.png')
              }
              text = "App Title"
              fsize = {50}
            />
          </View>
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>
              An app for sharing climbs without threatening access.
            </Text>
            <Text style={styles.getStartedText}>
              {`Welcome Clayton`}
            </Text>
            { this.state.user &&
              <TouchableOpacity
                onPress={() => firebase.auth().signOut()} 
              >
                <View style={styles.brushThin}>
                  <BrushText
                    image={
                      __DEV__
                        ? require('../assets/images/BrushMaroon.png')
                        : require('../assets/images/BrushMaroon.png')
                    }
                    text="Sign Out"
                    fsize={30}
                  />
                </View>
              </TouchableOpacity>
            }
          </View>
        </ScrollView>
      </View>
    );
  }


}
//67aaa8ccdf9ecdad3db95a58a8bf1d58ba9894b3
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  brush: {
    height: 90,
    width: 350,
    resizeMode: 'contain'
  },
  brushThin: {
    height: 40,
    width: 350,
    resizeMode: 'contain'
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
