import React from 'react';
import { ScrollView, StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import MapboxGL from "@react-native-mapbox-gl/maps";
import {Feature, Layer} from "@react-native-mapbox-gl/maps";
import firebase from 'react-native-firebase';
import marker from '../assets/images/marker.png';
import BrushText from '../components/BrushText';

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
      showMap: true,
      popUp: null
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
      const { name, location, grade, notes, area } = doc.data();

      climbs.push({
        key: doc.id,
        doc, // DocumentSnapshot
        name,
        location,
        grade,
        notes,
        area

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
  onSourceLayerPress = (e) => {
    const {name, grade, area, notes} = e.nativeEvent.payload.properties;
    this.setState({
      showMap: false,
      popUp: {
        name: name,
        grade: grade,
        area: area,
        notes: notes,
        imgURL: "Nothing yet"
      }
    })
  }

  render() {
    const { navigate } = this.props.navigation;
    const { climbs, popUp} = this.state;
    return (
      this.state.showMap ?

      <View style={styles.page}>
        <MapboxGL.MapView 
          style={styles.map}
          styleURL={MapboxGL.StyleURL.Satellite}
          centerCoordinate={[-105.8214,39.6428]}
        >
          {climbs.map(x =>
            <MapboxGL.ShapeSource 
              id={x.key}
              key={x.key}
              hitbox={{width: 20, height: 20}}
              onPress={this.onSourceLayerPress}
              shape={              {
                "type": "FeatureCollection",
                "features": [{"type":"Feature","geometry":{"type":"Point","coordinates":[x.location[1], x.location[0]]},
                "properties":{"name":x.name, "area": x.area, "grade": x.grade, "notes": x.notes}}]
              }}

              onClick={()=>alert("testing")}
            >
              <MapboxGL.SymbolLayer
                id="symbolLocationSymbols"
                key={x.key}
                minZoomLevel={1}
                style={{
                  iconImage: marker,
                  iconAllowOverlap: true,
                  iconSize: 0.5
                }}
              />
            </MapboxGL.ShapeSource >
          )}
        </MapboxGL.MapView>
        <TouchableOpacity
          style={styles.add}
          onPress={() => navigate('Add')}
        >
          <Text style={styles.addText}>Add Climb</Text>
        </TouchableOpacity>
        
      </View>
      :
        <ScrollView>
          <View style={styles.brush}>
            <BrushText
              image={
                __DEV__
                  ? require('../assets/images/BrushCoral.png')
                  : require('../assets/images/BrushCoral.png')
              }
              text={`${popUp.name}, (${popUp.grade})`}
              fsize={30}
            />
          </View>
          <Image style={{width: 360, height: 350}} source={require('../assets/images/bloody.png')}/>
          <View style={styles.brushThin}>
            <BrushText
              image={
                __DEV__
                  ? require('../assets/images/BrushPurp.png')
                  : require('../assets/images/BrushPurp.png')
              }
              text={popUp.area}
              fsize={30}
            />
          </View>
              <Text>{popUp.notes}</Text>
          <Button title="Close" onClick={() => this.setState({ showMap : true })}></Button>
        </ScrollView>

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
  brush: {
    height: 60,
    width: 350,
    resizeMode: 'contain'
  },
  brushThin: {
    height: 40,
    width: 350,
    resizeMode: 'contain'
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


/*



*/
