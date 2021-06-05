import { Appbar } from 'react-native-paper';
import * as React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button,IconButton} from 'react-native-paper'

function Secondscreen({navigation}){
    return (
        <View>
            <Appbar.Header>
                <Appbar/>
                <IconButton icon="menu" color={"#FFF"} size={30} style={{marginLeft:-5,marginRight:0}} onPress={()=>{navigation.toggleDrawer();}} />
                <Appbar.Content title="Second Screen" />
                <Appbar.Action icon="dots-vertical"/>
            </Appbar.Header>
        <View style={{alignItems:'center', justifyContent:'center', marginTop:100}}>
            <Button icon="camera" onPress={()=>{navigation.toggleDrawer();}} />
        </View>
    </View>
    )
}

export default Secondscreen