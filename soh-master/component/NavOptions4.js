import { View, Text, FlatList, TouchableOpacity,Image} from 'react-native'
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const data=[
    {
    id:"112",
    title:"Translation",
    image:"https://cdn-icons-png.flaticon.com/128/3898/3898082.png",
    screen:"Translation",
    },
    
];

const NavOptions4 = () => {
    const navigation=useNavigation();
  return (
    
    <FlatList
    data={data}
    horizontal
    keyExtractor={(item)=>item.id}
    renderItem={({item})=>(
        
        <TouchableOpacity
        onPress={()=> navigation.navigate(item.screen)} >
         <View>
            <Image style={{ width:100,height:100,resizeMode:"contain",marginLeft:10,marginTop:0}}
source={require('../assets/translate.png')}
         
            />
            <Text style={{fontSize:14 ,color:'lavender',fontWeight:'bold',marginLeft:10,marginTop:5}}>TRANSLATE</Text>
         </View>
         
           
        
        
        </TouchableOpacity>
    )}
    />
  )
}

export default NavOptions4;