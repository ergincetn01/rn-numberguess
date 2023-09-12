import { StyleSheet, Text, View } from "react-native";
import colors from "../constants/Colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numText}>{children}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.primaryYellow,
    margin: 24,
    padding: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numText: {
    color: colors.primaryYellow,
    fontSize: 36,
    fontWeight: "bold",
  },
});

export default NumberContainer;