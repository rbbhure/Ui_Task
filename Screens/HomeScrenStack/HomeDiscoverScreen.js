import React, { Component } from "react";
import { View, Text, Image, FlatList, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import { Globalstyles } from "../../Component/Globalstyles";
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

class HomeDiscoverScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {

      DATA: [{
        "id": 1,
        "name": "Mayur Gadge",
        "location": "Nagpur",
        "likes": "200",
        "comment": "50",
        "share": '30',
        "avatar": "https://images.pexels.com/photos/572463/pexels-photo-572463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      }, {
        "id": 2,
        "name": "Rohit Pallewad",
        "location": "Nanded",
        "likes": "250",
        "comment": "60",
        "share": '40',
        "avatar": "https://images.pexels.com/photos/792326/pexels-photo-792326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        "id": 3,
        "name": "Navnath Bhosale",
        "likes": "300",
        "comment": "57",
        "location": "Parbhani",
        "share": '33',
        "avatar": "https://images.pexels.com/photos/792326/pexels-photo-792326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        "id": 4,
        "name": "Naresh Pentewar",
        "likes": "320",
        "location": "Latur",
        "comment": "58",
        "share": '34',
        "avatar": "https://images.pexels.com/photos/974266/pexels-photo-974266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        "id": 5,
        "name": "Mahesh Bhure",
        "likes": "328",
        "location": "Latur",
        "comment": "85",
        "share": '80',
        "avatar": "https://images.pexels.com/photos/977796/pexels-photo-977796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        "id": 6,
        "name": "Prem Narwate",
        "location": "Latur",
        "likes": "379",
        "comment": "90",
        "share": '83',
        "avatar": "https://images.pexels.com/photos/769730/pexels-photo-769730.jpeg?auto=compress&cs=tinysrgb&w=600",
      },

      ],
      color: true,

    }

  }
  navigateToDetails=() =>{
    this.props.navigation.navigate('Detail')
  } 
 
  renderitem(itemData) {
    return (
      <View style={{ marginRight: 15 }}>
        <Image style={{ width: 165, height: 110, borderRadius: 5 }} source={{ uri: itemData.item.avatar }} />
        <View style={{ flexDirection: 'row', marginVertical: 10, alignItems: 'center' }}>
          <View style={{ marginRight: 5, borderRadius: 50, borderColor: "#ff8566", borderWidth: 2, width: 50, height: 50, justifyContent: "center", alignItems: "center" }}>
            <Image style={{ width: 40, height: 40, borderRadius: 40, }} source={{ uri: itemData.item.avatar }} />
          </View>
          <View>
            <Text style={{ fontSize: 16, color: 'black', fontWeight: '500' }}>{itemData.item.name}</Text>
          </View>

        </View>
      </View>
    )
  }
  renderItem(itemData) {
    return (
      <View style={{ marginTop: 10, marginBottom: 10 }}>
        <View style={{ flexDirection: 'row', marginBottom: 10, justifyContent: 'space-between', alignItems: 'center', marginRight: 8 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ marginRight: 10 }}>
              <Image style={{ width: 60, height: 60, borderRadius: 100, }} source={{ uri: itemData.item.avatar }} />
            </View>
            <View>
              <Text style={{ color: 'black', fontSize: 20, fontWeight: '500' }}>{itemData.item.name}</Text>
              <Text style={{ fontSize: 16, color: '#666699', fontWeight: '500' }}>{itemData.item.location}</Text>
            </View>
          </View>
          <View>
            <Entypo name="dots-three-vertical" size={20} color="#666699" />
          </View>

        </View>

        <ImageBackground style={{ width: '100%', height: 180, borderRadius: 40, }} imageStyle={{ borderRadius: 10 }} source={{ uri: itemData.item.avatar }}>
          <View style={{ flexDirection: 'row-reverse', }}>
            <TouchableOpacity >
              <Ionicons name="bookmark" size={30} color="white" style={{ marginRight: 20, margin: 10 }} />

            </TouchableOpacity>
          </View>
        </ImageBackground>
      
      
        <View style={{ marginTop: 10, marginLeft: 10, flexDirection: 'row', }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 20 }}>
            <AntDesign name="hearto" size={24} color="black" style={{ marginRight: 5 }} />
            <Text style={{ color: '#666699', fontWeight: '500', fontSize: 16 }}>{itemData.item.likes}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 20 }}>
            <FontAwesome name="comment-o" size={24} color="black" style={{ marginRight: 5 }} />
            <Text style={{ color: '#666699', fontWeight: '500', fontSize: 16 }}>{itemData.item.comment}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 20 }}>
            <MaterialCommunityIcons name="share" size={24} color="black" style={{ marginRight: 5 }} />
            <Text style={{ color: '#666699', fontWeight: '500', fontSize: 16 }}>{itemData.item.share}</Text>
          </View>

        </View>
        
        
      </View>
    )
  }
  render() {
    return (
      <ScrollView>
      <View style={{ margin: 20, marginTop: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
          <View style={{ flexDirection: 'row' }}>
            <View >
            <TouchableOpacity onPress={() =>this.props.navigation.navigate('Detail')}>
              <Text style={Globalstyles.text1}>Discover</Text>
              </TouchableOpacity>
            </View>
            <View style={{ paddingRight: 50, }} >
              <Entypo name="dot-single" size={50} color="#66b3ff" />

            </View>
          </View>
          <View>
            <Image style={{ width: 45, height: 45, borderRadius: 100, marginRight: 10 }} source={{ uri: 'https://media.istockphoto.com/photos/headshot-of-a-teenage-boy-picture-id1158014305?k=20&m=1158014305&s=612x612&w=0&h=RgcRlPfHFZA4OWSROC46FgBILIQVyiS6o_EmyZAMt4M=' }} />
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <FlatList data={this.state.DATA} renderItem={this.renderitem} horizontal />
        </View>
        <View style={{ marginTop: 10,marginBottom:10}}>
          <FlatList data={this.state.DATA} renderItem={this.renderItem} />
        </View>
      
      </View>
      </ScrollView>
    )
  }
}
export default HomeDiscoverScreen;