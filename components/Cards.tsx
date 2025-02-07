import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import images from "@/constants/images";
import icons from "@/constants/icons";

interface Props {
  onPress?: () => void;
}

export const FeaturedCard = ({ onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-col items-start w-60 h-80 relative"
    >
      <Image source={images.japan} className="size-full rounded-2xl" />
      <Image
        source={images.cardGradient}
        className="size-full rounded-2xl absolute bottom-0"
      />
      <View className="flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full absolute top-5 right-5">
        <Image source={icons.star} className="size-3" />
        <Text className="font-rubikBold text-xs ml-1 text-primary-300">
          4.4
        </Text>
      </View>
      <View className="flex flex-col items-start absolute bottom-5 inset-x-5">
        <Text
          className="text-xl font-rubikExtraBold text-white"
          numberOfLines={1}
        >
          Modern Apartment
        </Text>
        <Text className="text-base font-rubik text-white">
          22 w 15th St, New York, NY 10011
        </Text>
        <View className="flex flex-row justify-between items-center w-full">
          <Text className="text-xl font-rubikBold text-white">$2,500</Text>
          <Image source={icons.heart} className="size-5" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const RegularCard = ({ onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-1 w-full mt-4 px-3 py-4 rounded-lg bg-white shadow-lg shadow-black-100/70 relative"
    >
      <View className="flex flex-row items-center  absolute px-2 bg-white/90 p-1 rounded-full top-5 right-5 z-50">
        <Image source={icons.star} className="size-2.5" />
        <Text className="font-rubikBold text-xs ml-0.5 text-primary-300">
          4.4
        </Text>
      </View>
      <Image source={images.newYork} className="w-full h-40 rounded-lg" />
      <View className="flex flex-col mt-2">
        <Text
          className="text-base font-rubikBold text-black-300"
          numberOfLines={1}
        >
          Cozy Studio
        </Text>
        <Text className="text-xs font-rubik text-black-200">
          22 w 15th St, New York, NY 10011
        </Text>
        <View className="flex flex-row justify-between items-center mt-2">
          <Text className="text-base font-rubikBold text-primary-300">
            $2,500
          </Text>
          <Image
            source={icons.heart}
            className="w-5 h-5 mr-2"
            tintColor="#191d31"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
