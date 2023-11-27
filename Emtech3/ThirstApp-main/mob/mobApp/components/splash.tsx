import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/wave.json")} // Replace with your splash screen image
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: 200, // Adjust the width and height as needed
    height: 200,
  },
});
