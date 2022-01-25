import { StatusBar } from 'expo-status-bar';
import React  from 'react';
import { StyleSheet, Text,TouchableOpacity} from 'react-native';

export default function ResetButton(props){

    let{title,action}=props

    return(
        <TouchableOpacity style={styles.button} onPress={action}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    button: {
        backgroundColor:'#34f4f3',
        borderColor:'#2f4949',
        borderWidth:5,
        height:50,
        width:200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontWeight:'bold',
        color:'black',
        fontSize:15,
    }
})