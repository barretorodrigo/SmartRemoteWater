import React from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import {Header, Divider, ListItem, Card, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Path } from 'react-native-svg';
import { LineChart, XAxis, YAxis, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape';


export class Consolidated extends React.PureComponent {
  render() {

    const { navigate } = this.props.navigation;
    const { navigation } = this.props;

    const name = navigation.getParam('name', 'Sem hidrômetro');
    const avatar_url = navigation.getParam('avatar_url', 'Sem imagem');
    const subtitle = navigation.getParam('subtitle', 'Sem subtítulo');

    const data1 = [ 5, 1, 4, 9.5, -4, -2.4, 8.5, 9.1, 3.5, 5.3, -5.3, 2.4, 5, -2, -6 ]
    const data2 = [ 5, 1, 4, 9.5, -7, 2.4, 8.5, 9.1, 5.5, 2.3, -3.3, 2.4, 5, -2, -6 ]
    const axesSvg = { fontSize: 10, fill: 'grey' };
    const verticalContentInset = { top: 20, bottom: 20 }
    const xAxisHeight = 30


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
          leftComponent={<Button 
                          onPress={() =>  this.props.navigation.goBack()} 
                          buttonStyle={{marginLeft:-20, marginBottom:-10}}
                          icon={{name:"angle-left", type: 'font-awesome', style: { marginRight: 0, marginLeft: 0 }}} 
                          transparent>
                          </Button>}
          centerComponent={{ text: 'HydrometerControl', style: { color: '#fff', fontSize: 22, } }}
          rightComponent={<Button 
                          onPress={() =>  navigate('Data')} 
                          buttonStyle={{marginRight: -20, marginBottom:-10}}
                          icon={{name:"tint", type: 'font-awesome', style: { marginRight: 0, marginLeft: 0 }}} 
                          transparent>
                          </Button>}
        />
        <View style={styles.viewTop}>
          <Text style={styles.topText}>
            Dados do hidrômetro
          </Text>
        </View>

        {/*Gráfico para consumo mensal*/}
        <View style={styles.chartTitle}>
          <Text>Últimos minutos</Text>
        </View>
        <View style={{ height: 200, padding: 20, flexDirection: 'row' }}>
            <YAxis
                data={data1}
                contentInset={verticalContentInset}
                svg={axesSvg}
                numberOfTicks={5}
            />
            <View style={{ flex: 1, marginLeft: 10, marginTop:10 }}>
                <LineChart
                    style={ StyleSheet.absoluteFill }
                    data={data1}
                    contentInset={verticalContentInset}
                    svg={{ stroke: 'rgb(204, 61, 209)' }}
                    numberOfTicks={5}
                    min={0}
                >
                    <Grid/>
                </LineChart>
                <LineChart
                    style={ StyleSheet.absoluteFill }
                    data={data2}
                    contentInset={verticalContentInset}
                    svg={{ stroke: 'rgb(109, 204, 61)' }}
                >
                </LineChart>
                <View style={{ flex: 1}}></View>
                <XAxis
                    style={{ height: xAxisHeight, marginHorizontal: -10 }}
                    data={data1}
                    formatLabel={(value, index) => index}
                    contentInset={{ left: 10, right: 10}}
                    svg={axesSvg}
                />
            </View>
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
  chartTitle:{
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    marginTop: 10,
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
