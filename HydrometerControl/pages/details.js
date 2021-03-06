import React from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import {Header, Divider, ListItem, Card, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Path } from 'react-native-svg';
import { AreaChart, Grid } from 'react-native-svg-charts';
import * as shape from 'd3-shape';

export class Details extends React.PureComponent {
  render() {

    const { navigate } = this.props.navigation;
    const { navigation } = this.props;

    const id = navigation.getParam('id', '1');
    const name = navigation.getParam('name', 'Sem hidrômetro');
    const image = navigation.getParam('image', 'Sem imagem');
    const subtitle = navigation.getParam('subtitle', 'Sem subtítulo');


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
                          onPress={() =>  navigate('Consolidated')} 
                          buttonStyle={{marginRight: -20, marginBottom:-10}}
                          icon={{name:"tint", type: 'font-awesome', style: { marginRight: 0, marginLeft: 0 }}} 
                          transparent>
                          </Button>}
        />
        <View style={styles.viewTop}>
          <Text style={styles.topText}>
            Detalhes do hidrômetro
          </Text>
        </View>

        <View>
          <Card
            title={JSON.stringify(name)}
            image={{ uri: image }}>
            <Text style={{marginBottom: 10}}>
              Descrição: {JSON.stringify(subtitle)}
            </Text>
            <Text style={{marginBottom: 10}}>
              Tipo: tipo
            </Text>
            <Button
              icon={{name: "clipboard", type: 'font-awesome'}}
              backgroundColor='#3D6DCC'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='Dados' 
              onPress={() => navigate('Data', {
                  id: id
                })
              }/>
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
