import { FlatList, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';


  const data=[
    {
        id:"100",
        title :"Waste pickups",
        image:"https://cdn-icons-png.flaticon.com/128/3256/3256319.png",
        screen:"WasteScreen",

    },
    {
        id:"200",
        title:"Waste schedule",
        image:"https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
        screen:"ScheduleScreen",

     
    },
];

const NavOptions2 = () => {
  const navigation=useNavigation();
  return (
    <FlatList
    data={data}
   vertical
    keyExtractor={(item) => item.id}
    renderItem={({item}) => (
        <TouchableOpacity 
          onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-4 pt-4 bg-green-200  w-100 mb-1 mt-4 rounded-3xl border-2`}>
          <View>
              <Image
               style={{width:120,height:120,resizeMode:"contain", marginLeft:100, marginTop:30,  borderRadius:40}}
                source={{uri:item.image}}
              />
              <Text style={tw`mt-2 text-2xl text-center font-semibold`}>{item.title}</Text>
              <Icon
             style={tw`p-2 bg-black rounded-full w-70 ml-100 mt-4 mr-4`}
              name='arrowright'
              color='white'
              type='antdesign'
              />
            </View>
        </TouchableOpacity>
    )}
    />
  );
};

export default NavOptions2;
