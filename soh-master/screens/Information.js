import { StyleSheet, Text, View,Image,ScrollView } from 'react-native'
import React from 'react'
import NavOptions4 from '../component/NavOptions4';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import GifImage from '@lowkey/react-native-gif';

const Information = () => {
    const navigation = useNavigation();
  return (
    <View>
      <GifImage
  source={{
    uri:
      'https://media.tenor.com/ykSFUGPQkxoAAAAC/recycle-waste.gif',
  }}
  style={{
    width: 400,
    height: 300,
  }}
  resizeMode={'cover'}
/>
    <NavOptions4></NavOptions4>
    <ScrollView>
    

      <Text style={styles.heading}>Why is segregation Important?</Text>
        <Text style={styles.container}>
        Waste segregation is important not only to reduce the impact it has on the environment, but also health issues that can arise from waste and toxins that have been improperly disposed of.
         </Text>
         <Text style={styles.container}>Waste segregation is also an economically beneficial prospect because it makes recycling much easier</Text>
         <Text style={styles.heading}>What are the different types of Waste</Text>
         <Text style={styles.wasteTypes}> Liquid waste:</Text><Text style={styles.container}>Liquid waste refers to all grease, oil, sludges, wash water, waste detergents and dirty water that have been thrown away. </Text>
         <Text style={styles.wasteTypes}>solid Waste:</Text>
         <Text style={styles.container}>Solid waste is any garbage, sludge, and refuse found in industrial and commercial locations.</Text>
         <Text style={styles.wasteTypes}>Organic Waste:</Text>
         <Text style={styles.container}>Organic waste refers to rotten meat, garden and food waste. This type of rubbish is commonly found in homes. With time, they decompose and turn into manure by the action of microorganisms on them. But be careful; you should not dispose of them anywhere you like.</Text>
         <Text style={styles.wasteTypes}>Recyclable Waste:</Text>
         <Text style={styles.container}>All discarded items like metals, furniture, organic waste that can be recycled fall under this category. Not all items are recyclable, so you have to be careful when putting things into the recycle bin. If you are not sure whether an item is recyclable or not, then check the item’s packaging.</Text>
         <Text style={styles.wasteTypes}> Hazardous Waste:</Text>
         <Text style={styles.container}>Hazardous waste includes flammable, corrosive, toxic and reactive materials. In a nutshell, they are wastes that pose a significant or potential threat to our environment.</Text>
         <Text style={styles.heading}>Why is Recycling important?</Text>
         <Text style={styles.container}>More And More People recycle everyday.This helps to reduce
         the need  for landfill and more costly forms of disposal.
         Recycling also reduces the need for extracting mining,quarrying,and logging refining and processing raw 
         materials all of which create substantial air and water pollution.This helps to save Energy reducing greenhouse gas emission
         and helping to tackle climate change.</Text>


      
      
    </ScrollView>
    
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        marginLeft:20, fontSize:18,fontStyle:'normal',fontWeight:'bold',color:'lavender ',marginTop:10,
        marginBottom:20
    },
    heading:{
        fontWeight: 'bold',
        fontSize:30,
        color: 'indigo',
        marginLeft:20,
        alignItems: 'center',
        marginBottom:20,

    },
    wasteTypes:{
        fontWeight:'bold',
        fontSize:19,
        color:'lightslategrey',
        marginBottom:10,
        marginLeft:20,
    },
  });

export default Information;