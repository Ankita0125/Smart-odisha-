import { StyleSheet, Text, View , SafeAreaView,Image} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../component/NavOptions';
import GifImage from '@lowkey/react-native-gif';
import MarqueeText from 'react-native-marquee';


//import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      
      <View style={tw`p-5`}>
      <Image 
            style={{
              width:110,
              height:100,
              resizeMode:"contain",
              borderRadius:100,
              
              
             }}
             source={{
              uri:"https://tse2.mm.bing.net/th?id=OIF.dIp8CXTEAe0kWvfVwdgifQ&pid=Api&P=0",

             }}
  
          
      />
      <View style={{backgroundColor:'yellow'}}>
     <MarqueeText
          style={{ fontSize: 20 }}
          speed={1}
          marqueeOnStart={true}
          loop={true}
          delay={0.1}
        >
   Contact Us @ 1800-522-522    Contact Us @ 1800-522-522 
        </MarqueeText>
      
        </View>
           <NavOptions style={styles.text} >
            
           </NavOptions>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    text:{
        
        
    },

});