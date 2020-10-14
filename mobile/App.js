import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Routes} from './src/routes';
import { render } from 'react-dom';
import { BottomTabBar } from '@react-navigation/bottom-tabs';

export default function App() {
  return (
    <>
      <Routes/>
      {/* <BottomTabBar /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
