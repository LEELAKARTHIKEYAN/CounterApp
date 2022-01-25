import { StatusBar } from 'expo-status-bar';
import React  from 'react';
import { StyleSheet, Text,TouchableOpacity} from 'react-native';

export default function Button(props){

    let{title,action}=props

    return(
        <TouchableOpacity style={styles.button} onPress={action}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    button: {
        backgroundColor:'white',
        borderRadius:80,
        borderWidth:10,
        height:100,
        width:100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        
    }
})