import { FlatList, Text, TouchableOpacity, View,Image,StyleSheet } from 'react-native'
import React, { useState } from 'react'
import FindPickUp from '../screens/FindPickUp';
import tw from 'tailwind-react-native-classnames';
import { Icon } from '@rneui/themed';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {selectOrigin} from '../slices/navSlice'
import { selectDestination, setDestination } from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import { selectTravelTimeInformation } from '../slices/navSlice';
import MapView, { Marker } from 'react-native-maps'
import {setTravelTimeInformation} from '../slices/navSlice'



const data = [{
        id: "111",
        title: "Request 1",
        latitude: 20.270517077529995,
        longitude: 85.81350367486763,
        
    },
    {
        id: "222",
        title: "Request 2",
        latitude: 20.26797213874406,
        longitude: 85.80774695388806,
    },
    {
        id: "333",
        title: "Request 3",
        latitude: 20.27888880820606,
        longitude: 85.78715964115148,

    },
    {
        id: "444",
        title: "Request 4",
        latitude: 20.281343324897176, 
        longitude: 85.8038813739053

    },
    {
        id:"555",
        title:"Request 5",
        latitude:20.26330818342381, 
        longitude:85.83469459181902,
    }

];
const NavOption5 = () => {
  const origin=useSelector(selectOrigin)
    const [lat,setLat]=useState(0)
    const [long,setLong]=useState(0)
   const[location,setLocation]=useState(null)
  
    useEffect(() => {
       
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
        })();
      }, []);
    return (
        <View>
              <View style={tw`h-2/3`}>
   <MapView
   
   style={tw`flex-1`}
   mapType="mutedStandard"
   initialRegion={{
     latitude: 20.275270280714622,
     longitude: 85.74177753582585,
     latitudeDelta: 0.005,
     longitudeDelta: 0.005,
   }}
>

   {lat&&long?<Marker
   coordinate={{
       latitude:lat,
       longitude:long,
    }}
   />:<Marker
   coordinate={{
   
    latitude:20.275270280714622,
    longitude: 85.74177753582585
   }}
   
   />
    
    }
       <Marker
     coordinate={{
     
      latitude:20.275270280714622,
      longitude: 85.74177753582585
     }}
     pinColor={'green'}
     />
     
     {lat&&long?  
  
     
     
     <MapViewDirections
    origin={{latitude:lat,longitude:long}}
    destination={{latitude:20.275270280714622,longitude:85.74177753582585}}
    apikey={GOOGLE_MAPS_APIKEY}
    strokeWidth={4}
    strokeColor="blue"
  />:<Marker
   coordinate={{
   
    latitude:20.275270280714622,
    longitude: 85.74177753582585
   }}
   pinColor={'green'}
   />
    
    }


   
   </MapView>
   </View>
        <View style={tw`h-1/3`}>
      <FlatList
      
      data={data}
      vertical
      
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
    
          <TouchableOpacity 
            onPress={() => {
           setLat(item.latitude)
           setLong(item.longitude)
             }
            
            }
            style={tw`p-2 pl-6   bg-white-200 m-2 w-120`}>
              <View>
                  <Text style={tw`mt-2 text-center text-lg font-semibold`}>Proceed to: {item.title}</Text>
                <Icon
                style={tw`p-2 bg-black rounded-full w-100 mt-4`}
                name='arrowright'
                color='white'
                type='antdesign'
                />
              </View>
          </TouchableOpacity>
      )}
      
      />
      <TouchableOpacity 
       onPress={() => {
        setLat(origin.location.lat)
        setLong(origin.location.lng)
          }
        }
      
      
      
      style={tw`p-2 pl-6   bg-red-200 m-2 w-120`}> 
      <View>
                  <Text style={tw`mt-2 text-lg font-semibold text-center`}>Attention: Immediate Request!</Text>
                <Icon
                style={tw`p-2 bg-black rounded-full w-100 mt-4`}
                name='arrowright'
                color='white'
                type='antdesign'
                />
              </View>

      </TouchableOpacity>
      </View>
       
     
      </View>
    );
  };

                export default NavOption5

                const styles = StyleSheet.create({})