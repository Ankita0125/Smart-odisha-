import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location';
import tw from 'tailwind-react-native-classnames'
import {useState, useEffect } from 'react';
import { Provider, useSelector } from 'react-redux'
import  { Polyline } from "react-native-maps";
import { selectDestination, selectOrigin } from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions'
import { GOOGLE_MAPS_APIKEY } from "@env";


import { selectTravelTimeInformation } from '../slices/navSlice';

const Map = () => {
   
    const  origin = useSelector(selectOrigin);
    const [errorMsg, setErrorMsg] = useState(null);
    const [longitude,setLongitude]=useState(0);
    const [location, setLocation] = useState(0);
    const [coords, setCoords] = useState([]);
    const destination = useSelector(selectDestination);
    const coor = [
      {
        latitude: 20.39096130833494, 
        longitude: 85.81769196646192
      },
      {
        latitude: origin.location.lat,
           longitude: origin.location.lng,
      },
      
    ];
    useEffect(() => {
      (async () => {
        
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        // getDirections("52.5200066,13.404954", "20.39096130833494,85.81769196646192")
        // .then(coords => setCoords(coords))
        // .catch(err => console.log("Something went wrong"));
      })();
    }, []);
    let text = 'Waiting..';
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
      
    }
  return (
 
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
      <Marker
            coordinate={{
                latitude: 20.39096130833494, 
         longitude: 85.81769196646192, 
            }}
            title="Destination"
            description = {origin.description}
            identifier="origin"
            />
      <Marker
            coordinate={{
                latitude: origin.location.lat,
         longitude:  origin.location.lng,
            }}
            title="Destination"
            description = {origin.description}
            identifier="origin"
            />
    
        <MapViewDirections
        origin={{latitude: origin.location.lat,
          longitude: origin.location.lng}}
        destination="20.39096130833494,85.81769196646192"
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={3}
        strokeColor="black"
        />
        <MapViewDirections
        origin={{latitude: origin.location.lat,
          longitude: origin.location.lng}}
        destination="20.275270280714622,85.74177753582585"
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={3}
        strokeColor="black"
        />
    
        {console.log(location)}
        {origin?.location &&(
            <Marker
            coordinate={{
                latitude: origin.location.lat,
         longitude: origin.location.lng, 
            }}
            title="Origin"
            description = {origin.description}
            identifier="origin"
            />
        )}
        <Marker
        coordinate={{
          latitude: 37.8025259, longitude: -122.4351431 
        }}
        
        
        />
          
      
        </MapView>
 
     
   
   
  );
};

export default Map

const styles = StyleSheet.create({})