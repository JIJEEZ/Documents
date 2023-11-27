import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';

export default function Home({ navigation }) {
  return (
    <ImageBackground
      source={require('/Users/Sanchez/Desktop/bg.png')}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <View style={styles.headerContainer}>
          <Image
            source={require('/Users/Sanchez/Desktop/chugchug.gif')}
            style={styles.picture}
          />
          <Text style={styles.headerText}>Welcome</Text>
          <Text style={styles.headerMotto}>Welcome</Text>
        </View>

        {/* Add a View for the buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => {
              // Handle the first button press here
            }}
          >
            <Text style={styles.addButtonLabel}>Schedule Reminder</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.addButton}
            onPress={() => {
              // Handle the second button press here
            }}
          >
            <Text style={styles.addButtonLabel}>Schedule Notification</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    top: 150,
  },
  picture: {
    height: 170,
    width: 170,
    borderRadius: 85,
    borderWidth: 2,
  },
  headerText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
  },
  headerMotto: {
    fontSize: 18,
    color: 'white',
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30, 
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#A3D7E7',
    paddingVertical: 23,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    width: '45%', 
  },
  addButtonLabel: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
});
