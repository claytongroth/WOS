import React from 'react';
import { ScrollView, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import MapboxGL from "@react-native-mapbox-gl/maps";

MapboxGL.setAccessToken("pk.eyJ1IjoiY2dyb3RoIiwiYSI6ImNqZ2w4bWY5dTFueG0zM2w0dTNkazI1aWEifQ.55SWFVBYzs08EqJHAa3AsQ");

export default class MapScreen extends React.Component {
  static navigationOptions = {
    title: 'Map',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      
      <View style={styles.page}>
          <MapboxGL.MapView style={styles.map} />
          <TouchableOpacity
            style={styles.add}
            onPress={() => navigate('Add')}
          >
            <Text style={styles.addText}>Add Climb</Text>
          </TouchableOpacity>
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
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:80,
    height:80,
    borderRadius:40,
   },
   addText: {
     color: '#fcfaf9',
     fontSize: 20
   }
});
