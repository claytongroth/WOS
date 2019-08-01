import React from 'react';
import { ScrollView, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import MapboxGL from "@react-native-mapbox-gl/maps";
import Feature from "react-mapbox-gl"

MapboxGL.setAccessToken("pk.eyJ1IjoiY2dyb3RoIiwiYSI6ImNqZ2w4bWY5dTFueG0zM2w0dTNkazI1aWEifQ.55SWFVBYzs08EqJHAa3AsQ");

export default class MapScreen extends React.Component {
  static navigationOptions = {
    title: 'Map',
  };

  constructor() {
    super();
    this.ref = firebase.firestore().collection('climbs');
    this.unsubscribe = null;

    this.state = {
      loading: true,
      climbs: [],
      theSwitch: false
    };
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onCollectionUpdate = (querySnapshot) => {
    const climbs = [];
    querySnapshot.forEach((doc) => {
      const { title, location } = doc.data();

      climbs.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        location,

      });
    });

    this.setState({
      climbs,
      loading: false,
    });
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


  render() {
    const { navigate } = this.props.navigation;
    return (this.state.theSwitch ?

      <View style={styles.page}>

        <MapboxGL.MapView style={styles.map} />
        //add thing to make markers, click what to to go to climbView
        <Layer>
          {this.state.climbs.map(x =>
            <Feature
              coordinates={[x.location[0], x.location[1]]}
              onClick={this.setState({ theSwitch: true })} />
          )}
        </Layer>
        <TouchableOpacity
          style={styles.add}
          onPress={() => navigate('Add')}
        >
          <Text style={styles.addText}>Add Climb</Text>
        </TouchableOpacity>
      </View>
      :
      <View>
        <Img>path to downloaded image</Img>
        <scrollView>
          <Text>...</Text>
        </scrollView>
        <Button onClick={this.setState({ theSwitch : false })} />
      </View>


    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  map: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
  add: {
    position: 'absolute',//use absolute position to show button on top of the map
    top: '84%', //for center align
    alignSelf: 'flex-end',//for align to right
    backgroundColor: '#ff3c38',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  addText: {
    color: '#fcfaf9',
    fontSize: 20
  }
});
