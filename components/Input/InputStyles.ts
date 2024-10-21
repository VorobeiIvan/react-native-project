import { StyleSheet } from "react-native";
import {
  borderRadius,
  colors,
  fontFamily,
  fontSizes,
  fontWeights,
  lineHeights,
  padding,
} from "../../styles/global";

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderRadius: borderRadius.input,
    color: colors.black_primary,
    backgroundColor: colors.light_gray,
    borderColor: colors.border_gray,
    fontFamily: fontFamily.Roboto,
    fontSize: fontSizes.text,
    padding: padding.input,
  },
  focused: {
    backgroundColor: colors.white,
    borderColor: colors.orange,
  },
  text: {
    fontWeight: "400",
    fontSize: fontSizes.text,
    lineHeight: lineHeights.text,
    color: colors.black_primary,
  },
});

export default styles;
