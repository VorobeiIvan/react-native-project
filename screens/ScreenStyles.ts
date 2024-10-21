import { StyleSheet } from "react-native";
import { colors, borderRadius } from "../styles/global";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },

  contentContainer: {
    borderTopRightRadius: borderRadius.container,
    borderTopLeftRadius: borderRadius.container,
    backgroundColor: colors.white,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

export default styles;
