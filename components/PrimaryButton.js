import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors"
function PrimaryButton({ children, onPress }) {
    function handlePress(){
        onPress();
    }
  return (
    <View style={styles.outerContainer}>
      <Pressable
        android_ripple={{ color: Colors.primary600 }}
        style={({pressed})=> pressed ? [styles.innerContainer, styles.pressed]: styles.innerContainer}
        onPress={handlePress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  innerContainer: {
    backgroundColor: "mediumblue",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    width: 100,
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.5
  }
});

export default PrimaryButton;
