import { StyleSheet } from "react-native";
import { colors } from "../../styles/global";
const styles = StyleSheet.create({
  inputContainer: {
    gap: 16,
    marginHorizontal: 16,
  },

  togglePasswordVisibleButton: {
    position: "absolute",
    right: 0,
    justifyContent: "center",
  },
  rightPasswordInputButtonText: {
    color: colors.blue,
  },
  passwordInputContainer: {
    position: "relative",
  },
  buttonText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    padding: 16,
    color: colors.white,
    lineHeight: 20,
  },
  primaryButton: {
    width: "100%",
    height: 50,
    backgroundColor: colors.orange,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    gap: 16,
    marginVertical: 44,
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
    color: colors.blue,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
