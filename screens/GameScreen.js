import { View, Text, Button, StyleSheet } from "react-native";
import Title from "../components/Title";
import { useState } from "react";
import NumberContainer from "../components/NumberContainer";

 function generateRandomNumb(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
      return generateRandomNumb(min, max, exclude);
    } 
    else {
      return rndNum;
    }
  }
function GameScreen({userNum}) {
 const initialGuess=generateRandomNumb(1, 100, userNum);
 const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.container}>
      <Title>OPPONENT'S GUESS </Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Text>Higher or lower?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameScreen;
