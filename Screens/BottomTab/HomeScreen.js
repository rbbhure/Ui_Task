import React, { Component } from "react";
import { View, Text, Image, FlatList, ImageBackground, TouchableOpacity } from 'react-native'
import { Globalstyles } from "../../Component/Globalstyles";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeDiscoverScreen from "../HomeScrenStack/HomeDiscoverScreen";
import HomeDetailScreen from "../HomeScrenStack/HomeDetailScreen";

const stack=createNativeStackNavigator();

class HomeSceen extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }

  }
  
  render() {
    return (
    <stack.Navigator>
      <stack.Screen name="Discover" component={HomeDiscoverScreen} options={{headerShown:false}}/>
      <stack.Screen name="Detail" component={HomeDetailScreen} options={{headerShown:false}}/>
    </stack.Navigator>
    )
  }
}
export default HomeSceen;