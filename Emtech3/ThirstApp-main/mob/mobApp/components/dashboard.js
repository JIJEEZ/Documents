import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, ImageBackground, TextInput, TouchableOpacity, Image } from 'react-native';
import {useFonts} from 'expo-font';




export default function Dashboard({navigation}) {
  const [courseGoals, setCourseGoals] = useState([]);
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
    // Clear the input field
    setEnteredGoalText('');
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('/Users/Sanchez/Desktop/superlight.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <View style={styles.appContainer}>
            <View style={styles.headerContainer}>
          
         
            <Image 
              source = {require('/Users/Sanchez/Desktop/chugchug.gif')}
              style = {styles.logo} >

              </Image>

            </View>
          
          <View style={styles.appContainer}>
            
          

            <TouchableOpacity
              style={styles.addButton}
              onPress={() => navigation.navigate('Registration')}
            >
              <Text style={styles.addButtonLabel}>Get Started</Text>
              
            </TouchableOpacity>
          </View>



          <View style={styles.goalListContainer}>
            <FlatList
              data={courseGoals}
              renderItem={(itemData) => (
                <View style={styles.goalItems}>
                  <Text style={styles.goalText}>{itemData.item.text}</Text>
                </View>
              )}
            />
          </View>
        </View>
        </View>
      </ImageBackground>
    </View>
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

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },

  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 50,
    paddingHorizontal: 16,
    alignItems: 'center',
    
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 20,
  },


  //baboy na umiinom
  logo: {
    height: 170, // size nung logo
    width:170, // size nung loge
    top: 60,
    alignItems: 'center',
    
  },
 
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "white",
  },
  
  //(HOME)Welcome to hydrate4Today
  headerMotto: {
    fontSize: 50,
    fontWeight:800,
    color: "white",
    top: 55,
    
  },

  //(HOME)started
  headerMotto2: {
    fontSize: 24,
    fontWeight: 650,
    color: "white",
    top: 50,
  },

  //Stay hydrated
  headerMotto3: {
    fontSize: 15,
    color: "white",
    top: 80,
    fontFamily: 'ShadowsIntoLight-Regular',
    
  },

  inputContainer: {
    
    alignItems: 'center',
    marginBottom: 75,
  },

  //user input
  textInput: {
    flex: 1,
    marginRight: 10,
    borderBottomWidth: 1,
    borderColor: 'black',
    paddingVertical: 4,
    paddingHorizontal: 2,
  },

  //get started button
  addButton: {
    backgroundColor: '#A3D7E7', // Creamy aesthetic color
    
    paddingVertical: 23,
    paddingHorizontal: 70,
    borderRadius: 10,
    bottom: -150,
    alignItems:'center',
    
  },

  //text sa button
  addButtonLabel: {
    fontSize: 23,
    color: '#333', // Text color
    fontWeight: 'bold',
    
  },


  headerLabel: {
    fontSize: 30,
    color: 'white', // Text color
  },


  goalListContainer: {
    marginTop: 20,
    
  },
  goalItems: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  goalText: {
    fontSize: 18,
  },
});