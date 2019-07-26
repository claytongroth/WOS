import React from 'react';
import { ImageBackground, Text, View } from 'react-native';


export default class BrushText extends React.Component {
  render(){
    // 90h, 350w works well
    return (
      <ImageBackground source={this.props.image} style={{width: '100%', height: '100%'}}>
         <View style={{
           position: 'absolute',
           top: 0,
           left: 0,
           right: 0,
           bottom: 0,
           justifyContent: 'center',
           alignItems: 'center'
         }}>
           <Text style={{color: '#fcfaf9', fontSize: 50}}>{this.props.text}</Text>
         </View>
      </ImageBackground>
    );
  }
}
