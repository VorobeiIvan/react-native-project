import { StyleSheet, TextStyle } from "react-native";
import { MARGIN, COLORS, FONTS, LETTER_SPACINGS, LINE_HEIGHTS, FontWeight } from "../../constants/stylesConstants";

const styles = StyleSheet.create({
  title: {
    marginTop: MARGIN.BLOCK_SPACING,
    marginBottom: MARGIN.BLOCK_SPACING,
    fontFamily: FONTS.FAMILY.ROBOTO,
    fontSize: FONTS.SIZES.TITLE,
    lineHeight: LINE_HEIGHTS.TITLE,
    letterSpacing: LETTER_SPACINGS.TITLE,
    fontWeight: FONTS.WEIGHTS.BOLD as FontWeight, 
    color: COLORS.BLACK_PRIMARY,
    textAlign: "center",
  } as TextStyle,
});

export default styles;
