import React, { Component } from "react";
import { View, Text, Image, FlatList, ImageBackground, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, StyleSheet, TextInput } from 'react-native'
import { Globalstyles } from "../../Component/Globalstyles";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppIntroSlider from "react-native-app-intro-slider";


const width = Dimensions.get('screen').width
class HomeDetailScreen extends Component {

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
    }
  }
  renderitem = (itemData) => {
    return (
      <View >
        <ImageBackground source={{ uri: itemData.item.avatar }} style={{ width: width, height: 310 }} imageStyle={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5, margin: 10, marginTop: 10 }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Discover')}>
              <AntDesign name="arrowleft" size={28} color="white" />
            </TouchableOpacity>
            <Entypo name="dots-three-vertical" size={24} color="white" />

          </View>
        </ImageBackground>
      </View>
    );
  }
  render() {
    return (
      <ScrollView>
        <View>


          <View style={{ height: 370, backgroundColor: 'white', paddingBottom: 10 }}>
            <AppIntroSlider renderItem={this.renderitem} data={this.state.DATA} />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ marginLeft: 20, flexDirection: 'row', }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 20 }}>
                  <Entypo name="heart" size={26} color="#ff3300" style={{ marginRight: 5 }} />
                  <Text style={{ color: '#666699', fontWeight: '500', fontSize: 16 }}>247</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 20 }}>
                  <FontAwesome name="comment" size={26} color="#666699" style={{ marginRight: 5 }} />
                  <Text style={{ color: '#666699', fontWeight: '500', fontSize: 16 }}>51</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 20 }}>
                  <MaterialCommunityIcons name="share" size={26} color="#666699" style={{ marginRight: 5 }} />
                  <Text style={{ color: '#666699', fontWeight: '500', fontSize: 16 }}>40</Text>
                </View>

              </View>
              <View style={{ marginRight: 10 }}>
                <Ionicons name="bookmark" size={24} color="#666699" />
              </View>
            </View>
          </View>


          <View style={{ flexDirection: 'row', backgroundColor: '#e0e0eb', padding: 5, borderWidth: 1, borderColor: 'black' }}>
            <View style={{ width: 80, height: 80, borderRadius: 100, borderWidth: 2, borderColor: 'pink', justifyContent: 'center', alignItems: 'center', width: '21%' }}>

              <Image style={{ width: 70, height: 70, borderRadius: 100 }} source={{ uri: 'https://images.pexels.com/photos/572463/pexels-photo-572463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} />
            </View>
            <View style={{ width: '75%', margin: 5 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.text1}>Mayur Gadge</Text>
                <Text style={styles.text2}>8 Hours ago</Text>
              </View>
              <Text style={{ color: '#66b3ff', fontSize: 16, fontWeight: '600' }}>#Photshoot#Smile#Beautiful#Fashion</Text>
              <Text style={{ fontWeight: '600', fontSize: 16 }}>cras gravinda bibendon dolor eu varuos</Text>
              <Text style={{ fontWeight: '600', fontSize: 16 }}>ipsum Fermentum velate nisi egte</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', backgroundColor: 'white', padding: 5, borderBottomColor: 'black', borderBottomWidth: 1 }}>

            <View style={{ justifyContent: 'center', margin: 5 }} >

              <Image style={{ width: 70, height: 70, borderRadius: 100, alignItems: 'center' }} source={{ uri: 'https://images.pexels.com/photos/572463/pexels-photo-572463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} />
              <Entypo name="heart" size={26} color="#ff3300" style={{ marginRight: 5, alignSelf: 'center' }} />
            </View>

            <View style={{ width: '75%', margin: 5 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.text1}>Emma Stone</Text>
                <Text style={styles.text2}>3 Hours ago</Text>
              </View>
              <Text style={{ fontWeight: '600', fontSize: 16 }}>wow! just amazing. i love your profile{'\n'}content. Look forword to see more{'\n'}Well done!</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', backgroundColor: 'white', padding: 5, borderBottomColor: 'black', borderBottomWidth: 1 }}>

            <View style={{ justifyContent: 'center', margin: 5 }} >

              <Image style={{ width: 70, height: 70, borderRadius: 100, alignItems: 'center' }} source={{ uri: 'https://images.pexels.com/photos/792326/pexels-photo-792326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} />
              <Entypo name="heart" size={26} color="#ff3300" style={{ marginRight: 5, alignSelf: 'center' }} />
            </View>

            <View style={{ width: '75%', margin: 5 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.text1}>Sarah John</Text>
                <Text style={styles.text2}>2 Hours ago</Text>
              </View>
              <Text style={{ fontWeight: '600', fontSize: 16 }}>Rhoncus ipsum eget tempus. Present {'\n'}Fermentum sa rhoncus ipsum eget tem Present</Text>
            </View>
          </View>





          <View style={{ margin: 10, flexDirection: 'row', marginBottom: 30 }}>
            <View style={{ marginRight: 10 }}>
              <Image style={{ width: 50, height: 50, borderRadius: 100, alignItems: 'center' }} source={{ uri: 'https://media.istockphoto.com/photos/headshot-of-a-teenage-boy-picture-id1158014305?k=20&m=1158014305&s=612x612&w=0&h=RgcRlPfHFZA4OWSROC46FgBILIQVyiS6o_EmyZAMt4M=' }} />
            </View>
            <View style={{ backgroundColor: '#e0e0eb', borderRadius: 20, width: '80%' }}>
              <TextInput placeholder="Add a comment" style={{ marginLeft: 10, fontSize: 18 }} placeholderTextColor='#9494b8' />
            </View>
          </View>


        </View>

      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  dotView: {


    justifyContent: 'center',
    flexDirection: 'row'






  },
  dottextt: {
    color: 'white',
    textAlign: 'center'
  },
  text1: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center'
  },
  text2: {
    fontSize: 18,
    fontWeight: '500',
    color: '#666699'
  }
})
export default HomeDetailScreen;