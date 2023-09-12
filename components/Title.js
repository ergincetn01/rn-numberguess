import { Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

function Title({children}) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    color: Colors.primaryYellow,
    fontSize: 18,
    borderWidth: 2,
    borderColor: Colors.primaryYellow,
    padding: 8,
  },
});

export default Title;
