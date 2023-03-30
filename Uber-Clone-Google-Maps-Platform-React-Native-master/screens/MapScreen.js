import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Map from '../component/Map';
import NavigateCard from '../component/NavigateCard';
import { createStackNavigator } from '@react-navigation/stack';
import RideOptionsCard from '../component/RideOptionsCard';

const MapScreen = () => {
  const Stack = createStackNavigator();

  return (
    <View>
      <View style={tw`h-2/5`}>
        <Map/>
      </View>

      <View style={tw`h-3/5`}>
        <Stack.Navigator>
        <Stack.Screen
          name="NavigateCard"
          component={NavigateCard}
          options={{
            headerShown: false,
          }}     
        />
        <Stack.Screen
          name="RideOptionsCard"
          component={RideOptionsCard}
          options={{
            headerShown: false,
          }}     
        />
        </Stack.Navigator>
        </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});