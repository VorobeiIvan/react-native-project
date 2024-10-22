import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
    resizeMode: "cover",
    backgroundColor: COLORS.LIGHT_GRAY,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
});

export default styles;
