import { Link } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

export default function Index() {
  return (
    <View>
      <Text className="text-3xl font-rubikBold">Welcome to our estate</Text>
      <Link href={"/sign-in"}>Sign In</Link>
      <Link href={"/explore"}>explore</Link>
      <Link href={"/profile"}>profile</Link>
      <Link href="/properties/1">Property</Link>
    </View>
  );
}
