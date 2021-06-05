import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigatorIOS, StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home'
import Secondscreen from './Screens/Secondscreen'
import {createDrawerNavigator} from '@react-navigation/drawer'
import { DrawerContent } from './Screens/DrawerContent'

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="secondscreen" component={Secondscreen} />
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
