import { StyleSheet } from "react-native";
import { borderRadius, colors } from "../../styles/global";

const styles = StyleSheet.create({
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: borderRadius.avatar,
    backgroundColor: colors.light_gray,
    alignSelf: "center",
    marginTop: -60,
  },

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
