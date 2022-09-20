import React,{ Component } from "react";
import {View,Text,TouchableOpacity,Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native'
import HomeSceen from "./Screens/BottomTab/HomeScreen";
import ChatScreen from "./Screens/BottomTab/ChatScreen";
import AddPhotosScreen from "./Screens/BottomTab/AddPhotosScreen";
import NotificationScreen from "./Screens/BottomTab/NotificationScreen";
import ProfilScreen from "./Screens/BottomTab/ProfileScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


 
const Tab=createBottomTabNavigator();
class App extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }
render(){
  return(
  
    <NavigationContainer>
        <Tab.Navigator  >
      <Tab.Screen name="Home" component={HomeSceen} 
      options={{headerShown:false,tabBarShowLabel:false,
        tabBarIcon:(tabInfo) =>{return(
          <Entypo name="home" size={30} color={tabInfo.focused ? "#66b3ff" : "#666699"} style={{padding:10}} />
        )}
      }}/>
      <Tab.Screen name="Chat" component={ChatScreen}    options={{headerShown:false,tabBarShowLabel:false,
        tabBarIcon:(tabInfo) =>{return(
          <Ionicons name="chatbubbles-outline" size={30} color={tabInfo.focused ? "#66b3ff" : "#666699"} style={{padding:10}} />
        )}
      }}/>
      <Tab.Screen name="Add" component={AddPhotosScreen}    options={{headerShown:false,tabBarShowLabel:false,
        tabBarIcon:(tabInfo) =>{
          return(
            <View style={{width:90,height:100,padding:5,backgroundColor:'white',borderTopEndRadius:50,borderTopLeftRadius:50,justifyContent:'center',alignItems:'center',}}>
            <TouchableOpacity >
                        <Image style={{width:65,height:65,marginBottom:20}} source={require('C:/React Native/First/Ui_Task/assets/Plus-Symbol-Vector-PNG-HD-Image.png')} />
          </TouchableOpacity>
          </View>
        
       ) },
      }}  />
      <Tab.Screen name="Notification" component={NotificationScreen}    options={{headerShown:false,tabBarShowLabel:false,
        tabBarIcon:(tabInfo) =>{return(
          <MaterialIcons name="notifications-none" size={30} color={tabInfo.focused ? "#66b3ff" : "#666699"} style={{padding:10}} />
        )}
      }} />
      <Tab.Screen name="Profile" component={ProfilScreen}    options={{headerShown:false,tabBarShowLabel:false,
        tabBarIcon:(tabInfo) =>{return(
          <MaterialCommunityIcons name="account-outline" size={30} color={tabInfo.focused ? "#66b3ff" : "#666699"}style={{padding:10}}/>
        )}
      }} />
    </Tab.Navigator>
    </NavigationContainer>
  )
}
}
export default App;