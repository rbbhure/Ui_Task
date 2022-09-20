
import React, { Component, useEffect, useState } from "react";
import { View, Text, Image, Dimensions, ScrollView, ImageBackground, StyleSheet } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const count = 0;
const DATA = [
  "https://images.pexels.com/photos/572463/pexels-photo-572463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/792326/pexels-photo-792326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/792326/pexels-photo-792326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/974266/pexels-photo-974266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/977796/pexels-photo-977796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/769730/pexels-photo-769730.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/572463/pexels-photo-572463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/792326/pexels-photo-792326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/792326/pexels-photo-792326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/974266/pexels-photo-974266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/977796/pexels-photo-977796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTOxBongQrkwnFZbyGEydYLBPp-cjQA0vVvIo2o3_P&s",
  "https://images.pexels.com/photos/572463/pexels-photo-572463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/792326/pexels-photo-792326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/792326/pexels-photo-792326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/974266/pexels-photo-974266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/977796/pexels-photo-977796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/769730/pexels-photo-769730.jpeg?auto=compress&cs=tinysrgb&w=600",
]
const data = []
for (var i = 1; i <= DATA.length / 6; i++) {
  data.push(1)
}
const width = Dimensions.get('screen')




class ProfilScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {



    }
  }


  render() {
    return (
      <ScrollView>
        <View style={{ margin: 10 ,marginBottom:20}}>
          <View style={{ flexDirection: 'row-reverse' }}>
            <FontAwesome5 name="grip-lines" size={24} color="black" style={{ marginRight: 10 }} />
          </View>
          <View style={{ flexDirection: 'row', }}>
            <View >
              <ImageBackground source={{ uri: 'https://media.istockphoto.com/photos/headshot-of-a-teenage-boy-picture-id1158014305?k=20&m=1158014305&s=612x612&w=0&h=RgcRlPfHFZA4OWSROC46FgBILIQVyiS6o_EmyZAMt4M=' }} style={{ width: 120, height: 120 }} imageStyle={{ borderRadius: 100 }}>
                <View style={{ marginTop: 95, justifyContent: 'center', alignItems: 'center', backgroundColor: '#66b3ff', alignSelf: 'center', borderRadius: 10 }}>
                  <View>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'white', textAlign: 'center' }}>   Edit Profile  </Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
            <View style={{ margin: 10 }}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 22 }}>David</Text>
                <Text style={{ color: 'black', fontWeight: '400', fontSize: 22 }}> Bruno</Text>
              </View>
              <Text style={{ color: '#666699', fontWeight: '500', fontSize: 18 }}>San Francisco,CA</Text>
              <Text style={{ color: '#666699', fontWeight: '500', fontSize: 14 }}>Rhoncus ipsum eget tempus.</Text>
              <Text style={{ color: '#666699', fontWeight: '599', fontSize: 14 }}>Prasent Fermentum sa rhoncus</Text>
            </View>


          </View>
          <View style={styles.followerview}>
            <View>
              <Text style={styles.text1}>109</Text>
              <Text style={styles.text2}>Posts</Text>
            </View>
            <View>
              <Text style={styles.text1}>1.5M</Text>
              <Text style={styles.text2}>Followers</Text>
            </View>
            <View>
              <Text style={styles.text1}>71</Text>
              <Text style={styles.text2}>Following</Text>
            </View>
          </View>
          <Like />
        </View>
      </ScrollView>
    )
  }
}
function Like() {

  return (
    <View>

      {data.map((item) => {



        return (
          <View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ margin: 5 }}>
                <Image source={{ uri: DATA[count] }} style={{ width: 115, height: 100, borderRadius: 10 }} />
              </View>
              <View style={{ margin: 5 }}>
                <Image source={{ uri: DATA[count + 1] }} style={{ width: 115, height: 100, borderRadius: 10 }} />
              </View>
              <View style={{ margin: 5 }}>
                <Image source={{ uri: DATA[count + 2] }} style={{ width: 115, height: 100, borderRadius: 10 }} />
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{}}>
                <Image source={{ uri: DATA[count + 3] }} style={{ width: 115, height: 100, borderRadius: 10, margin: 5 }} />
                <Image source={{ uri: DATA[count + 4] }} style={{ width: 115, height: 100, borderRadius: 10, margin: 5 }} />
              </View>
              <View>
                <Image source={{ uri: DATA[count + 5] }} style={{ width: 235, height: 210, borderRadius: 10, margin: 5 }} />
              </View>
            </View>
          </View>


        )
      })}


    </View>
  )
}

const styles = StyleSheet.create({
  followerview: {
    margin: 20,
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'space-around',
    elevation: 0.9,
    shadowColor: 'black',
    flexDirection: 'row',
    borderRadius: 10
  },
  text1: {
    color: 'black',
    fontSize: 22,
    fontWeight: '800',
    textAlign: 'center'
  },
  text2: {
    fontSize: 18,
    fontWeight: '500',
    color: '#666699'
  }
})

export default ProfilScreen;