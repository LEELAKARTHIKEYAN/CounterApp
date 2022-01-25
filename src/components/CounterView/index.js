import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text,View} from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
import Button from '../Buttons';

export default function LkCounter()
{

    const [count,setCount]= useState(0);
    const [taps,setTaps]= useState(0);

    function increaser(){
        setCount(count+1);
        setTaps(taps+1);
    }

    function decreaser(){
        setCount(count-1);
        setTaps(taps+1);
    }

    function resetCounter(){
        setCount(count-count);
    }
    function resetTaps(){
        setTaps(taps-taps);
    }


    return(
        <View style={styles.counterlayout}>
            <StatusBar style='auto' />
            {/* <LinearGradient colors={['#2B1B39','#1D1835','#1A1A37']}
            style={{ flex:1,alignItems:'center',
            justifyContent:'center', }}> */}
            {/* Title */}
            <Text style={styles.counterTitle}>LK's Counter</Text>
            {/* Number of times we used the buttons */}
            <View style={styles.counterdisp}>
                <Text style={styles.counterNum}>{count}</Text>
            </View>
            <Text style={styles.counterTaps}>NUMBER OF TAPS : {taps} </Text>
            {/* Counter display  */}
            {/* Increment and decrement buttons of the counter */}
            <View style={styles.IncDecButtons}>
                <View style={{marginRight:20}}>
                    <Button title={"+"} action={increaser}/>
                </View>
                <View style={{marginLeft:20}}>
                <Button title={"-"} action={decreaser}/>
                </View>
            </View>
            {/* Reset button */}
            <View style={styles.resetButtons}>
                <View style={{marginRight:20}}>
                <Button title={"RESET COUNTER"} action={resetCounter}/>
                </View>
                <View style={{marginLeft:20}}>
                <Button title={"RESET TAPS"} action={resetTaps}/>
                </View>
            </View>
            {/* </LinearGradient> */}
        </View>
    )

}

const styles = StyleSheet.create({
    counterlayout :{
        backgroundColor:'grey',
        flex:1,
        alignItems: 'center',
        paddingTop:100,
    },
    counterTitle: {
        color:'orange',
        fontSize:45,
        fontWeight:'bold',
        paddingBottom:'10%',
    },

    // counterDisplay
    counterdisp:{
        backgroundColor:'black',
        // borderRadius:80,
        borderWidth:50,
        borderColor:'white',
        alignItems:'center',
        // justifyContent: 'center',
        height:200,
        width:200,
    },
    counterNum:{
        fontSize:45,
        color:'white',
    },
    //Tappings
    counterTaps :{
        color:'orange',
        fontSize: 20,
        textAlign:'center',
        fontWeight:'bold',
        padding:'8%',
    },
    //Buttons
    //Increment and decrement buttons
    IncDecButtons:{
        display:'flex',
        flex:0.3,
        flexDirection:'row',
        paddingBottom:50,
    },
    // Reset Buttons
    resetButtons:{
        paddingTop:'5%',
        display:'flex',
        flex:1,
        flexDirection:'row',
    },
})