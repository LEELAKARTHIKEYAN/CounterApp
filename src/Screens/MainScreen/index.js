import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';

import LkCounter from '../../components/CounterView';
import ContextProvider from '../../components/ContextProvider';


export default function MainScreen(){
    return(
        <ContextProvider>
            <LkCounter/>
        </ContextProvider>
    )
}