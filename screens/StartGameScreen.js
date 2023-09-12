import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/Colors";

function StartGameScreen({onNumPick}) {
  const [enteredNum, setEnteredNum] = useState("");

  function numberHandler(num) {
    setEnteredNum(num);
  }
  function reset() {
    setEnteredNum("");
  }

  function confirm() {
    const chosenNumber = parseInt(enteredNum);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number", "Number has to be between 0 and 99", 
      [{ text: "Okay", style: "destructive", onPress: reset}]);
      return;
    }
    
    onNumPick(chosenNumber);
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        maxLength={2}
        onChangeText={numberHandler}
        value={enteredNum}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.btnContainer}>
        <View style={styles.resetBtn}>
          <PrimaryButton onPress={reset}>Reset</PrimaryButton>
        </View>
        <View style={styles.confirmBtn}>
          <PrimaryButton onPress={confirm}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 250,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary500,
    borderRadius: 8,
    elevation: 8,
    alignItems: "center",
  },
  input: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.primaryYellow,
    color: Colors.primaryYellow,
    borderBottomWidth: 2,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
    width: 100,
  },
  resetBtn: { marginTop: 4 },
  confirmBtn: {
    marginTop: 4,
  },
  btnContainer: {
    flexDirection: "row",
  },
});

export default StartGameScreen;
