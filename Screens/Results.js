import { Appbar } from 'react-native-paper';
import * as React from 'react'
import {Text, View, StyleSheet,Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button,IconButton,Headline} from 'react-native-paper'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
import { color } from 'react-native-reanimated';

function Output({route,navigation}){

    const {data} = route.params;

    return (
        <View>
            <Appbar.Header>
                <Appbar/>
                <IconButton icon="chevron-left" color={"#FFF"} size={30} style={{marginLeft:-5,marginRight:0}} onPress={()=>navigation.navigate('JustAnalyze')} />
                <Appbar.Content title="Results" />
                <Appbar.Action icon="dots-vertical"/>
            </Appbar.Header>
        <View>
        <Headline style={{borderBottomColor:'#6338ed',borderBottomWidth:1,borderColor:'#6338ed',color:'#6338ed',marginTop:20,marginBottom:40,justifyContent:'center',alignSelf:'center'}}>Emotions Graph</Headline>
        {/* <Text>{navigation.getParam('name')}</Text> */}
        {/* <Text>{data}</Text> */}
        <BarChart
            data={{
            labels: ["Happy", "Sadness", "Fear", "Anger", "Surprise"],
            datasets: [
                {
                data: [
                    JSON.parse(data)["Happy"]*100,
                    JSON.parse(data)["Sad"]*100,
                    JSON.parse(data)["Fear"]*100,
                    JSON.parse(data)["Angry"]*100,
                    JSON.parse(data)["Surprise"]*100,
                ]
                }
            ]
            }}
            width={Dimensions.get("window").width-20} // from react-native
            height={250}
            yAxisSuffix="%"
            fromZero={true}
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
            backgroundColor: "#9348FF",
            backgroundGradientFrom: "#9348FF",
            backgroundGradientTo: "#6338ed",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            fillShadowGradient:'skyblue',
            barPercentage:0.9,
            fillShadowGradientOpacity:1,
            style: {
                borderRadius: 1,
            },
            propsForDots: {
                r: "6",
                strokeWidth:"10",
                stroke: "#fff"
            }
            }}
            bezier
            showValuesOnTopOfBars={true}
            style={{
            marginVertical: 20,
            borderRadius: 16,
            marginLeft:10,
            marginRight:10,
            borderRadius: 2,
            borderRightWidth:20,
            borderWidth:0,
            borderColor:'#6338ed',
            }}
        />
        </View>
        
    </View>
    )
}

export default Output