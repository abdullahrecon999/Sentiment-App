import { Appbar } from 'react-native-paper';
import * as React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button,IconButton} from 'react-native-paper'
import * as Animatable from 'react-native-animatable';

function About({navigation}){
    return (
    <View>
    <Appbar.Header>
        <Appbar/>
        <IconButton icon="menu" color={"#FFF"} size={30} style={{marginLeft:-5,marginRight:0}} onPress={()=>{navigation.toggleDrawer();}} />
        <Appbar.Content title="About" />
        <Appbar.Action icon="dots-vertical"/>
    </Appbar.Header>
        <View style={{alignItems:'center', justifyContent:'center', marginTop:50,padding:10}}>
          <Animatable.Text style={{
                  borderBottomColor:'#6338ed',
                  borderColor:'#6338ed',
                  color:'#6338ed',
                  marginTop:20,
                  fontSize:18,
                  marginBottom:40,
                  justifyContent:'center',
                  alignSelf:'center'}} 
                  animation="fadeInDown" iterationCount={10} direction="alternate">Welcome to the Emotion Detection App</Animatable.Text>
          <Animatable.Text animation="fadeIn" iterationCount={1} delay={0} direction="alternate">
            The Sentiment detection application contains one module which 
            is working.</Animatable.Text>
          <Animatable.Text animation="fadeIn" iterationCount={1} direction="alternate" style={{marginTop:10}}>
            The App contains a Django server which contains the python code for the Machine learning model which
            is currently just text to emotion python library.</Animatable.Text>
          <Animatable.Text animation="fadeIn" iterationCount={1} direction="alternate" style={{marginTop:10}}>
            The App is developed using React-Native framework and communicates with the Django backend server using the REST Api.
            </Animatable.Text>
          <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{marginTop:20 ,textAlign: 'center' }}>🌟🌟🌟🌟🌟</Animatable.Text>
        </View>
    </View>
    );
}

export default About

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