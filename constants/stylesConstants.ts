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
      REGULAR: "400",
      MEDIUM: "500",
      BOLD: "700",
    },
  };
  
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
    SMALL_ICON_TEXT: 4, // Відступи від іконки до тексту
    MEDIUM_ICON_TEXT: 6, // Відступи від іконки до тексту (інший варіант)
    REGULAR: 16, // Відступи між елементами в окремому блоці
    BLOCK: 32, // Відступи між блоками
    BUTTON_BLOCK: 44, // Відступ від блоку кнопок
    DATE: 8, // Відступ до дати
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
  