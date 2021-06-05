import { Appbar } from 'react-native-paper';
import * as React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button,IconButton} from 'react-native-paper'

function Home({navigation}){
    return (
    <View>
    <Appbar.Header>
        <Appbar/>
        <IconButton icon="menu" color={"#FFF"} size={30} style={{marginLeft:-5,marginRight:0}} onPress={()=>{navigation.toggleDrawer();}} />
        <Appbar.Content title="Home" />
        <Appbar.Action icon="dots-vertical"/>
    </Appbar.Header>
        <View style={{alignItems:'center', justifyContent:'center', marginTop:100}}>
            <Button icon="camera" onPress={()=>{navigation.toggleDrawer();}} />
        </View>
    </View>
    );
}

export default Home

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
      marginTop: 20,
      marginLeft: 0,
      marginBottom:50,
    },
  });