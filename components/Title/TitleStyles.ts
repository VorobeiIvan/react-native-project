import { StyleSheet } from "react-native";
import {
  colors,
  fontFamily,
  fontSizes,
  fontWeights,
  lineHeights,
  margin,
} from "../../styles/global";

const styles = StyleSheet.create({
  title: {
    marginTop: margin.block,
    marginBottom: margin.block,
    fontFamily: fontFamily.Roboto,
    fontSize: fontSizes.title,
    lineHeight: lineHeights.title,
    fontWeight: 500,
    color: colors.black_primary,
    textAlign: "center",
  },
});

export default styles;
