



import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames";
//import Maps from 
import {useDispatch} from 'react-redux';
import {useEffect} from "react"
import { useState } from 'react';
import Map from '../component/Map2';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env"
import * as Progress from "react-native-progress"
const Pickup=()=>{
  const dispatch=useDispatch();
  return(
    <View >
   

    <View style={tw`h-4/5`}><Map/></View>

    <View style={tw`h-1/5`}>
    <Progress.Bar size={30} width={600} indeterminate={true} animationType= 'spring' borderRadius={0} color='green'/>
    <Text style={tw`m-10 text-green-900 text-center`}> Saving your location for immediate pickup...</Text>
    </View>
    </View>
       
    
  )
}
export default Pickup
const styles = StyleSheet.create({})

