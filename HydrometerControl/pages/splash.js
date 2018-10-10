import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {Header, Divider, ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Path } from 'react-native-svg';
import { AreaChart, Grid } from 'react-native-svg-charts';
import * as shape from 'd3-shape';


export class Splash extends React.Component {

  componentWillUnmount() {
    clearTimeout(this.interval);
  }

  splash(){
    this.interval = setTimeout(() => this.props.navigation.navigate('Index'), 1800);
  }


  render() {

    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
      {this.splash()}
        <Text style={styles.text}>HydrometerControl</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3D6DCC',
  },
  titleText: {
    marginLeft: 10,
    fontSize: 20,
  },
  subtitleText: {
    color: '#708090',
    marginLeft: 10,
  },
  text:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
    textAlign: 'center',
    color: '#fff',
    fontSize: 30,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
  },
  footerText: {
    padding: 5,
    color: '#708090',
  },
});
