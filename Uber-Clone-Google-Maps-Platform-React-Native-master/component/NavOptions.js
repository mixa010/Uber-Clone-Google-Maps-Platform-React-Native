import { Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native' 
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';


const data = [
  {
    id: "123",
    title: "Naruči vozilo",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
];

const NavOptions = () => { 
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    <FlatList
    data={data}
    horizontal
    keyExtractor={(item) => item.id}
    renderItem={({item}) => (
      <TouchableOpacity
      onPress={() => navigation.navigate(item.screen)}
      style={tw`p-2 pl-6 pb-5 pt-0 bg-gray-200 ml-24 mt-2 w-40 items-center `}
      disabled={!origin}>
        <View style={tw`${!origin && "opacity-20 "}`}>
          <Image
          style={{  width: 120, height:120, resizeMode: "contain" }}
            source={{uri: item.image}} />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon style={tw`p-2 bg-black rounded-full w-10 mt-4`} name="arrowright" color="white" type="antdesign" ></Icon>
        </View>
      </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;