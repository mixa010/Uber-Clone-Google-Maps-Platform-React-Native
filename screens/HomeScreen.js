import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Image } from "react-native";
import NavOptions from "../component/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setOrigin, setDestination } from "../slices/navSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const item = {
    image: require("../../Žarko_Peruničić_diplomski_rad_taxi_app/assets/taxi.png"),
  };

  return (
    <View style={tw`bg-white h-full`}>
      <Image
        source={item.image}
        style={{
          width: 80,
          height: 80,
          marginTop: 110,
          marginBottom: 0,
          marginLeft: 155,
          resizeMode: "contain",
        }}
      />
      <View style={tw`p-5 bg-white`}>
        <GooglePlacesAutocomplete
          placeholder="Vaša lokacija?"
          styles={toInoutBoxStyles1}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );

            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />
        <NavOptions />
      </View>
    </View>
  );
};

export default HomeScreen;

const toInoutBoxStyles1 = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 0,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 4,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 8,
    paddingRight: 27,
  },
});
