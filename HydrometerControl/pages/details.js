import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {Header, Divider, ListItem, Card, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Path } from 'react-native-svg';
import { AreaChart, Grid } from 'react-native-svg-charts';
import * as shape from 'd3-shape';

export class Details extends React.Component {
  render() {

    const { navigate } = this.props.navigation;
    const { navigation } = this.props;

    const name = navigation.getParam('name', 'Sem hidrômetro');
    const avatar_url = navigation.getParam('avatar_url', 'Sem imagem');
    const subtitle = navigation.getParam('subtitle', 'Sem subtítulo');

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
          leftComponent={<Icon name="angle-left" color="#fff" style={{fontSize:20}} />}
          centerComponent={{ text: 'HydrometerControl', style: { color: '#fff', fontSize: 22, } }}
          rightComponent={<Icon name="tint" color="#fff" style={{fontSize:15}} />}
        />
        <View style={styles.viewTop}>
          <Text style={styles.topText}>
            Detalhes do hidrômetro
          </Text>
        </View>

        <View>
          <Card
            title={JSON.stringify(name)}
            image={{ uri: avatar_url }}>
            <Text style={{marginBottom: 10}}>
              Descrição: {JSON.stringify(subtitle)}
            </Text>
            <Text style={{marginBottom: 10}}>
              Tipo: tipo
            </Text>
            <Button
              leftIcon={{name: 'show-chart'}}
              backgroundColor='#3D6DCC'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='Dados' />
          </Card>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Sistema para controle de hidrômetros - DECiv/UFSCar e IFSP</Text>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewTop:{
    backgroundColor: '#F2F2F2',
    height: 80,
    marginTop: -3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topText:{
    fontSize: 18,
  },
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
