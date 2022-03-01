import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LkCounter from './src/components/CounterView';

export default function App() {
  return (
    <>
    <LkCounter/>
    </>
  );
}

const styles = StyleSheet.create({
  
});
