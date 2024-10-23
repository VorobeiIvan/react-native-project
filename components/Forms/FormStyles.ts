import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";
const styles = StyleSheet.create({

  togglePasswordVisibleButton: {
    position: "absolute",
    right: 0,
    justifyContent: "center",
  },
  rightPasswordInputButtonText: {
    color: COLORS.BLUE,
  },
  passwordInputContainer: {
    position: "relative",
  },
  buttonText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    padding: 16,
    color: COLORS.WHITE,
    lineHeight: 20,
  },
  primaryButton: {
    width: "100%",
    height: 50,
    backgroundColor: COLORS.ORANGE,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },

  secondaryButton: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 4,
  },
  text: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: COLORS.BLUE,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
