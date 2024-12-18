import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
const Header = () => {
  return (
    <View style={{backgroundColor:"#003580",height:65,flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
      <Pressable style={{flexDirection:"row",alignItems:"center",borderColor:"white",borderRadius:20,padding:7,borderWidth:2}}>
      <Ionicons name="bed-outline" size={24} color="white" />
     <Text style={{marginLeft:8,fontWeight:"bold",color:"white",fontSize:15}}>Stays</Text>
      </Pressable>
      <Pressable style={{flexDirection:"row",alignItems:"center"}}>
      <MaterialIcons name="flight" size={24} color="white" />
     <Text style={{marginLeft:8,fontWeight:"bold",color:"white",fontSize:15}}>Flights</Text>
      </Pressable>
      <Pressable style={{flexDirection:"row",alignItems:"center"}}>
      <MaterialIcons name="car-rental" size={26} color="white" />
     <Text style={{marginLeft:8,fontWeight:"bold",color:"white",fontSize:15}}>Car Rental</Text>
      </Pressable>
      <Pressable style={{flexDirection:"row",alignItems:"center"}}>
      <FontAwesome6 name="taxi" size={24} color="white" />
     <Text style={{marginLeft:8,fontWeight:"bold",color:"white",fontSize:15}}>Taxi</Text>
      </Pressable>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})