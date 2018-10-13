import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';

import {Splash} from './pages/splash';
import {Index} from './pages/index';
import {Details} from './pages/details';
import {Data} from './pages/data';
import {Consolidated} from './pages/consolidated'


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
  Data: {
    screen: Data
  },
  Consolidated: {
  	screen: Consolidated
  },
},{
  initialRouteName: 'Splash',
  headerMode: 'none', 
});

export default mainFlow;