import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../HomeScreen';
import RecentTask from './RecentTask';
const Drawer = createDrawerNavigator();
const Drawer01 = () => {
  return (
  
    <NavigationContainer>
    <Drawer.Navigator>

    {/* <Drawer.Screen name="Home" component={HomeScreen} /> */}
    <Drawer.Screen name="RecentTask" component={RecentTask} />
   
  
   </Drawer.Navigator>
   </NavigationContainer>
  )
}

export default Drawer01

const styles = StyleSheet.create({})