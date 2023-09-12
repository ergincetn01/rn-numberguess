import { ImageBackground, StyleSheet, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
export default function App() {

  const [userNumber, setUserNumber]=useState();

  function handlePickedNumber(pickedNum){
    setUserNumber(pickedNum);
  }

  let screen = <StartGameScreen onNumPick={handlePickedNumber}/>

  if(userNumber){
    screen = <GameScreen/>
  }
  return (
    <LinearGradient colors={["white", "black"]} style={styles.container}>
      <ImageBackground
        source={require("./assets/img/numbg.jpg")}
        style={styles.container}
        resizeMode="cover"
        imageStyle={styles.bgImage}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    opacity: 0.8
  }
});
