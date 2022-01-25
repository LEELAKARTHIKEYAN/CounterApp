import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text,View} from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
import Button from '../Buttons';
import ResetButton from '../resetButtons';

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
            <Text style={styles.counterTitle}>COUNTER </Text>
            {/* Number of times we used the buttons */}
            <View style={styles.counterupdisp}>
            <View style={styles.counterdisp}>
                <Text style={styles.counterNum}>{count}</Text>
            </View>
            </View>
            <Text style={styles.counterTaps}>Number of Taps : {taps} </Text>
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
                <View style={{marginBottom:10}}>
                <ResetButton title={" RESET COUNTER"} action={resetCounter}/>
                </View>
                <View style={{marginBottom:20}}>
                <ResetButton title={" RESET TAPS"} action={resetTaps}/>
                </View>
            </View>
            {/* </LinearGradient> */}
        </View>
    )

}

const styles = StyleSheet.create({
    counterlayout :{
        backgroundColor:'black',
        flex:1,
        alignItems: 'center',
        paddingTop:100,
    },
    counterTitle: {
        color:'#baaaa6',
        textShadowRadius:80,
        textShadowColor:'#ff7700',
        fontSize:45,
        fontWeight:'bold',
        paddingBottom:'10%',
    },

    // counterDisplay
    counterupdisp:{
        backgroundColor:'black',
        borderRadius:200,
        borderWidth:10,
        borderColor:'#baaaa6',
        alignItems:'center',
        justifyContent: 'center',
        height:250,
        width:250,
    },
    counterdisp:{
        backgroundColor:'#f2590c',
        borderRadius:100,
        borderWidth:50,
        borderColor:'#f06f2e',
        borderBottomColor:'#ed601a',
        borderTopColor:'#ed601a',
        alignItems:'center',
        // justifyContent: 'center',
        height:200,
        width:200,
    },
    counterNum:{
        fontSize:45,
        color:'white',
        paddingTop:15,
        fontWeight:'bold',
    },
    //Tappings
    counterTaps :{
        color:'#baaaa6',
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
        paddingBottom:70,
    },
    // Reset Buttons
    resetButtons:{
        paddingTop:'5%',
        display:'flex',
        flex:1,
        flexDirection:'column',
    },
})