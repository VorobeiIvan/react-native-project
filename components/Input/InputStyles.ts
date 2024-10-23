// cSpell:ignore Roboto
import { StyleSheet } from "react-native";
import { BORDER_RADIUS, COLORS, FONTS, LINE_HEIGHTS, PADDING } from "../../constants";


const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderRadius: BORDER_RADIUS.INPUT,
    color: COLORS.BLACK_PRIMARY,
    backgroundColor: COLORS.LIGHT_GRAY,
    borderColor: COLORS.BORDER_GRAY,
    fontFamily: FONTS.FAMILY.ROBOTO,
    fontSize: FONTS.SIZES.TEXT,
    padding: PADDING.AROUND,
  },
  focused: {
    backgroundColor: COLORS.WHITE,
    borderColor: COLORS.ORANGE,
  },
  text: {
    // fontWeight: "400",
    fontSize: FONTS.SIZES.TEXT,
    lineHeight: LINE_HEIGHTS.TEXT,
    color: COLORS.BLACK_PRIMARY,
  },
});

export default styles;
