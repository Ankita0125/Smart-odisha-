import { StyleSheet, Text, View,SafeAreaView,Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions3 from '../component/NavOptions3';
import { GOOGLE_MAPS_APIKEY } from "@env";
import Map from '../component/Map';
import { setDestination, setOrigin } from '../slices/navSlice';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView from 'react-native-maps';
import { useDispatch } from 'react-redux';
const UserScreen = () => {
 
    const dispatch = useDispatch();
    return (
      <View>
        
 <GooglePlacesAutocomplete
placeholder=" Your Location "
styles={{
 container : {
   flex:0,
   paddingTop: 45,
   paddingLeft: 20,
   paddingRight: 20
 },
 textInput:{
   fontSize:18,
 },
}}
onPress={(data, details = null)=>{
dispatch(setOrigin({
 location : details.geometry.location,
 description : data.description
}))
dispatch(setDestination(null))
}}
fetchDetails={true}
returnKeyType ={'search'}
enablePoweredByContainer={false}
minLength={2}
query={{
 key: GOOGLE_MAPS_APIKEY,
 language: 'en'
}}
 nearbyPlacesAPI = "GooglePlacesSearch"
 debounce = {400}
/>
<View style={tw`p-5`}>
          
          
    
             <NavOptions3></NavOptions3>
             
        </View>
       
     
           
      </View>
   );
};

  
  export default UserScreen;
  
  const styles = StyleSheet.create({
      text:{
          color:"blue",
      },
  
  });