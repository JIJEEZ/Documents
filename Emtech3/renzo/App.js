import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ImageBackground,
  TextInput,
  Pressable,
  Modal,
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [isWarningModalVisible, setWarningModalVisible] = useState(false);

  const addGoalHandler = () => {
    if (courseGoals.length >= 5) {
      setWarningModalVisible(true);
    } else {
      setCourseGoals((currentCourseGoals) => [
        ...currentCourseGoals,
        { text: enteredGoalText, key: Math.random().toString() },
      ]);
      setEnteredGoalText("");
    }
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleWarningModal = () => {
    setWarningModalVisible(!isWarningModalVisible);
  };

  const displayWarningModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={isWarningModalVisible}
        onRequestClose={() => setWarningModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Button
              title="Dismiss"
              onPress={() => setWarningModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("/Users/jio/Documents/Emtech3/renzo/bg.jpeg")}
        style={styles.backgroundImage}
      >
        <View style={styles.menuIconContainer}>
          <Icon name="menu" size={24} color="black" />
        </View>
        <View style={styles.appContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>CASA's GOALS</Text>
          </View>
          <View style={styles.welcomeContainer}>
            <Button title="Welcome" onPress={toggleModal} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Your course goals!"
              style={styles.textInput}
              onChangeText={(text) => setEnteredGoalText(text)}
              value={enteredGoalText}
            />
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed
                    ? "rgba(200, 235, 205, 0.7)"
                    : "rgba(255,235,205,0.7)",
                  padding: 10,
                  borderRadius: 5,
                },
                styles.addButton,
              ]}
              onPress={addGoalHandler}
            >
              {({ pressed }) => (
                <Text style={styles.addButtonLabel}>
                  {pressed ? "Adding Goal" : "Add Goal"}
                </Text>
              )}
            </Pressable>
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
      </ImageBackground>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Welcome to CASA's Goals!</Text>
            <Button title="Dismiss" onPress={toggleModal} />
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isWarningModalVisible}
        onRequestClose={toggleWarningModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Nothing is worth your health. Nothing is worth poisoning yourself
              into stress, anxiety, and fear. — Steve Maraboli
            </Text>
            <Button title="Dismiss" onPress={toggleWarningModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 50,
    paddingHorizontal: 16,
    backgroundColor: "rgba(255, 250, 240, 0.3)",
  },
  headerContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  welcomeContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  textInput: {
    flex: 1,
    marginRight: 10,
    borderBottomWidth: 1,
    borderColor: "black",
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
  addButton: {
    backgroundColor: "rgba(255, 235, 205, 0.7)",
    padding: 10,
    borderRadius: 5,
  },
  addButtonLabel: {
    fontSize: 18,
    color: "#333",
  },
  goalListContainer: {
    marginTop: 20,
  },
  goalItems: {
    backgroundColor: "white",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  goalText: {
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  menuIconContainer: {
    position: "absolute",
    top: 15,
    left: 15,
  },
});
