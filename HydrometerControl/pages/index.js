import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {Header, Divider, ListItem, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Path } from 'react-native-svg';
import { AreaChart, Grid } from 'react-native-svg-charts';
import * as shape from 'd3-shape';



export class Index extends React.Component {
  render() {

    const { navigate } = this.props.navigation;

    const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

        const Line = ({ line }) => (
            <Path
                key={'line'}
                d={line}
                stroke={'rgb(134, 65, 244)'}
                fill={'none'}
            />
        )

    const list = [
      {
        name: 'Hidrômetro 1',
        avatar_url: 'https://http2.mlstatic.com/20-hidrmetro-34-pre-equipadosem-sensor-conexoes-D_NQ_NP_889301-MLB20306167063_052015-O.jpg',
        subtitle: 'Hidrômetro residencial - reed switch'
      },
      {
        name: 'Hidrômetro 2',
        avatar_url: 'https://http2.mlstatic.com/sensor-de-fluxo-de-agua-12-medidor-de-vazo-efeito-hall-D_NQ_NP_356401-MLB20330709676_062015-F.jpg',
        subtitle: 'Hidrômetro arduino - efeito hall'
      },
      ]

    return (
      <View style={styles.container}>
        <Header
          
          centerComponent={{ text: 'HydrometerControl', style: { color: '#fff', fontSize: 22, } }}
          rightComponent={<Button 
                          onPress={() =>  navigate('Consolidated')} 
                          buttonStyle={{marginRight: -20, marginBottom:-10}}
                          icon={{name:"tint", type: 'font-awesome', style: { marginRight: 0, marginLeft: 0 }}} 
                          transparent>
                          </Button>}
        />

        <View>
          {
            list.map((l, i) => (
              <ListItem
                key={i}
                title={<Text style={styles.titleText}>{l.name}</Text>}
                subtitle={<Text style={styles.subtitleText}>{l.subtitle}</Text>}
                avatar={{ uri: l.avatar_url }}
                onPress={() => navigate('Details', {
                  name: l.name,
                  avatar_url: l.avatar_url,
                  subtitle: l.subtitle,
                })}
              />
            ))
          }
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Sistema para controle de hidrômetros - DECiv/UFSCar e IFSP</Text>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
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
