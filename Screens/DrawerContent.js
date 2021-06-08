import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import {
    Drawer,
    Text,
    TouchableRipple,
    Switch,
    Divider
} from 'react-native-paper'
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props){

    const [isDarkMode, setDarkMode]=React.useState(false);
    const toggleTheme=() =>{setDarkMode(!isDarkMode);}

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{marginLeft:50}}>
                            <Image style={{marginLeft:-50,marginBottom:10,width:250,height:120}} source={require('../assets/TweetI.png')}/>                            
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <Divider />
                        <DrawerItem 
                            label="JustAnalyze"
                            onPress={() => {props.navigation.navigate('JustAnalyze')}}
                        />
                        <Divider />
                        <DrawerItem 
                            label="Search Tweet"
                            onPress={() => {props.navigation.navigate('STweet')}}
                        />
                        <Divider />
                        <DrawerItem 
                            label="About"
                            onPress={() => {props.navigation.navigate('About')}}
                        />
                    </Drawer.Section>
                    

                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text style={{marginLeft:10,color:'#7E7E7E'}}>Dark Mode</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkMode}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>

                </View>
            </DrawerContentScrollView>

            {/* Bottom Drawer Signout button */}
            <Drawer.Section style= {styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {}}
                />
            </Drawer.Section>
            <View>
                <Text style={{marginLeft:20,marginBottom:10,fontWeight:"100",fontStyle:'italic',fontSize:10}}>Version 1.0</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 5,
      paddingHorizontal: 5,
    },
  });