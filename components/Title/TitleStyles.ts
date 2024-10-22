import { StyleSheet, TextStyle } from "react-native";
import {
  MARGIN,
  FONTS,
  LETTER_SPACINGS,
  LINE_HEIGHTS,
  COLORS,
} from "../../constants";

const styles = StyleSheet.create({
  title: {
    marginTop: MARGIN.BLOCK_SPACING,
    marginBottom: MARGIN.BLOCK_SPACING,

    textAlign: "center",

    fontFamily: FONTS.FAMILY.ROBOTO,
    fontSize: FONTS.SIZES.TITLE,
    lineHeight: LINE_HEIGHTS.TITLE,
    letterSpacing: LETTER_SPACINGS.TITLE,
    fontWeight: FONTS.WEIGHTS.BOLD,
    color: COLORS.BLACK_PRIMARY,
  } as TextStyle,
});

export default styles;
