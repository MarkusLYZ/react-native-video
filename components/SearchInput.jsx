import { View, Text, TextInput, Image, Alert } from "react-native";
import React from "react";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

import { icons } from "../constants";
import { router, usePathname } from "expo-router";
import { Query } from "react-native-appwrite";

const SearchInput = () => {
  const pathname = usePathname();
  const [query, setQuery] = useState('');
  return (
    <View className="border-2 border-black-200 rounded-2xl focus:border-secondary 2-full h-16 px-4 bg-black-100 items-center flex-row space-x-4">
      <TextInput
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        value={query}
        placeholder="Search for a video topic"
        placeholderTextColor="#CDCDE0"
        onChangeText={(e) => setQuery(e)}
      />
      <TouchableOpacity onPress={() => {
        if (!query) {
          return Alert.alert('Missing query', "Pleaste input someting to search results across database")
        }
        if (pathname.startsWith('/search')) {
          router.setParams({ query })
        } else {
          router.push(`/search/${query}`)
        }

      }}>
        <Image
          source={icons.search}
          className="w-5 h-5 "
          resizeMode="contain"
        ></Image>
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
