import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigatorIOS, StyleSheet, Text, View } from 'react-native';
import About from './Screens/About'
import JustAnalyze from './Screens/JustAnalyze'
import STweet from './Screens/SearchTweet'
import {createDrawerNavigator} from '@react-navigation/drawer'
import { DrawerContent } from './Screens/DrawerContent'
import Output from './Screens/Results'

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer >
      <Drawer.Navigator initialRouteName="About" drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="JustAnalyze" component={JustAnalyze} />
        <Drawer.Screen name="STweet" component={STweet} />
        {/* <Drawer.Screen name="Results" component={Output} >{props => <Output {...props} extraData={someData} />}</Drawer.Screen> */}
        <Drawer.Screen name="Results" >{props => <Output {...props} />}</Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  materialHeader1: {
    height: 56,
    width: 375,
    marginTop: 0,
    marginLeft: 0,
    marginBottom:0,
  },
});
