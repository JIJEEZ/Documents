import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      // Navigate to the first screen of your app after 2 seconds
      navigation.navigate('Registration');
    }, 2000); // 2000 milliseconds = 2 seconds
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        source={require('C:/Users/Sanchez/Documents/KSan/mob/mobApp/assets/wave.json')}
        autoPlay
        loop={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
