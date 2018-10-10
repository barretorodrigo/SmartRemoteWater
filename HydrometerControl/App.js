import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';

import {Splash} from './pages/splash';
import {Index} from './pages/index';
import {Details} from './pages/details';


const mainFlow = createStackNavigator({
  Splash: {
    screen: Splash
  },
  Index: {
    screen: Index
  },
  Details: {
    screen: Details
  },
},{
  initialRouteName: 'Splash',
  headerMode: 'none', 
});

export default mainFlow;