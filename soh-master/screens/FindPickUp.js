import { StyleSheet, Text, View,SafeAreaView,Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import {  useSelector } from 'react-redux';
import { selectDestination } from '../slices/navSlice'; 
import { selectTravelTimeInformation } from '../slices/navSlice';
const FindPickUp = () => {
    const selectlong=useSelector(selectDestination);
    const selectlat=useSelector(selectTravelTimeInformation);
    return (
      <SafeAreaView style={tw`bg-white h-full`}>
      <Text>{selectlong}</Text>
      <Text>{selectlat}</Text>
       
      </SafeAreaView>
    );
  };
  
  export default FindPickUp;
  
  const styles = StyleSheet.create({
      text:{
          color:"blue",
      },
  
  });


