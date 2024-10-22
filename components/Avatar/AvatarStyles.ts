import { StyleSheet } from "react-native";
import { borderRadius, colors } from "../../styles/global";

const styles = StyleSheet.create({


  addAvatarButton: {
    position: "absolute",
    width: 24,
    height: 24,
    bottom: 14,
    right: -14,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default styles;
