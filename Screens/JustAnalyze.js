import { Appbar } from 'react-native-paper';
import * as React from 'react'
import {Text, View, StyleSheet, ActionSheetIOS} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button,IconButton,TextInput, BottomNavigation} from 'react-native-paper'
import Result from './Results'
import 'axios'


var myHeaders = new Headers();
myHeaders.append("Authorization", "Token c7c6986da64b6d6694216195e0d0fbc5aa567a37");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "csrftoken=zFvVjAXtY701RbIF5PxOen6ffSTCSlsZLQ2pdiYAlBslq1d47DOYdNgCBVEB4m9r; sessionid=1nre5csj15zzrgf7ayxb2eg0jqppvsnz");



function JustAnalyze({navigation}){
    const [text, setText] = React.useState('');
    const [result,setRes]=React.useState('');
    const [lang,setLang]=React.useState('');

    var raw = JSON.stringify({
        "InputText": text
      });
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      function getRes(){
        fetch("http://<System-Ip>:8000/api/predict/", requestOptions)
        .then(response => response.text())
        .then(result => setRes(result))
        .catch(error => console.log('error', error)); 
        if(result!=""){
            navigation.navigate(
            'Results',
            { data:result },
            );
        }
      }

      function detectLang(){
        fetch("http://<System-Ip>8000/api/predict/", requestOptions)
        .then(response => response.text())
        .then(result => setRes(result))
        .catch(error => console.log('error', error));
        console.log(result);
        if(result!=""){
            setLang(JSON.parse(result)["Language"]);
        }
        else{
            fetch("http://192.168.18.16:8000/api/predict/", requestOptions)
            .then(response => response.text())
            .then(result => setRes(result))
            .catch(error => console.log('error', error));
            console.log(result);
        }
        //console.log(JSON.parse(result)["Language"])
      }

    return(
        <View>
            <Appbar.Header style={{Color:'#6338ed'}}>
                <Appbar/>
                <IconButton icon="menu" color={"#FFF"} size={30} style={{marginLeft:-5,marginRight:0}} onPress={()=>{navigation.toggleDrawer();}} />
                <Appbar.Content title="JustAnalyze" />
                <Appbar.Action icon="dots-vertical"/>
            </Appbar.Header>
        <View style={{padding: 5,
                    marginRight: 10,
                    marginLeft:10,
                    marginTop: 10,
                    borderWidth:1,
                    borderRadius:10,
                    borderColor: '#fff',
                    backgroundColor: '#b280f1',
                    height: 170}}>
            <TextInput
                placeholder="Enter text"
                value={text}
                mode={'outlined'}
                multiline={true}
                numberOfLines={10}
                underlineColor="#3927b3"
                onChangeText={text=>setText(text)}
            />
        </View>
        <View style={{padding:40,alignItems:'center',justifyContent:'center'}}>
            <Button 
            contentStyle={{height:60}}
            style={{borderRadius:1,width:150,display:'flex'}} 
            labelStyle={{fontSize:18}} 
            mode="contained"
            onPress={()=>{detectLang();}}>
            Analyze!</Button>
            <Text style={{marginTop:20,marginLeft:10,fontStyle:'italic',color:'#A8A8A8'}}>
                Language Detected: [ {lang} ]
            </Text>
        </View>
        <View style={{padding:10,marginLeft:220,marginTop:50}}>
            <Button 
            contentStyle={{height:50}} 
            style={{borderRadius:60,width:100}} 
            labelStyle={{fontSize:13.5}}
            mode="contained"
            color="#6338ed"
            icon={{source:"arrow-right-drop-circle",direction:"ltr"}}
            onPress={()=>{getRes()}}>
            Results</Button>
        </View>
    </View>
    );
}

export default JustAnalyze
