// styles.ts

// Об'єкт для кольорів
const COLORS = {
    WHITE: "#FFFFFF",
    BLACK_PRIMARY: "#212121",
    LIGHT_GRAY: "#F6F6F6",
    GRAY: "#9B9B9B",
    BORDER_GRAY: "#E8E8E8",
    BLUE: "#1B4371",
    ORANGE: "#FF6C00",
  };
  
  // Об'єкт для шрифтів
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
  
  // Тип для шрифтів
  export type FontWeight = typeof FONTS.WEIGHTS[keyof typeof FONTS.WEIGHTS];
  
  // Об'єкт для міжбуквенних інтервалів
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
  
  // Об'єкт для закруглення країв
  const BORDER_RADIUS = {
    COMMENT: 6,
    INPUT: 8,
    CONTENT_BLOCK: 8,
    AVATAR: 16,
    CONTAINER: 24,
    BUTTON: 100,
  };
  
  // Об'єкт для внутрішніх відступів
  const PADDING = {
    INPUT: 16,
    BUTTON_VERTICAL: 16,
    BUTTON_HORIZONTAL: 32,
  };
  
  // Об'єкт для зовнішніх відступів
  const MARGIN = {
    SMALL_ICON_TEXT: 4, // Відступ між маленькою іконкою та текстом
    MEDIUM_ICON_TEXT: 6, // Відступ між середньою іконкою та текстом
    ELEMENT_SPACING: 16, // Відступ між елементами в одному блоці
    BLOCK_SPACING: 32, // Відступ між різними блоками
    BUTTON_GROUP_SPACING: 44, // Відступ між кнопками в блоці
    DATE_SPACING: 8, // Відступ перед датою
};
  
  // Експорт об'єктів
  export {
    COLORS,
    FONTS,
    LETTER_SPACINGS,
    LINE_HEIGHTS,
    BORDER_RADIUS,
    PADDING,
    MARGIN,
  };
  