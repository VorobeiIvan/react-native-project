const FONTS = {
  FAMILY: {
    ROBOTO: "Roboto",
  },
  SIZES: {
    TITLE: 30,
    NAVIGATION: 17,
    TEXT: 16,
    COMMENTS: 13,
    SUBTITLE: 13,
    LIGHT_TEXT: 11,
    DATE: 10,
  },
  WEIGHTS: {
    REGULAR: "400" as const,
    MEDIUM: "500" as const,
    BOLD: "700" as const,
  },
};

const LETTER_SPACINGS = {
  TITLE: 0.3,
  NAVIGATION: -0.41,
};

// Об'єкт для висот рядків
const LINE_HEIGHTS = {
  DATE: 12,
  LIGHT_TEXT: 13,
  SUBTITLE: 15,
  COMMENTS: 18,
  TEXT: 19,
  NAVIGATION: 22,
  TITLE: 35,
};
export default {
  FONTS,
  LETTER_SPACINGS,
  LINE_HEIGHTS,
  ...FONTS,
  ...LETTER_SPACINGS,
  ...LINE_HEIGHTS,
};
