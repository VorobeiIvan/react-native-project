// styles.ts

// Об'єкт для кольорів
const Colors = {
  white: "#FFFFFF",
  black_primary: "#212121",
  light_gray: "#F6F6F6",
  gray: "#9B9B9B",
  border_gray: "#E8E8E8",
  blue: "#1B4371",
  orange: "#FF6C00",
};

// Об'єкт для шрифтів
const Fonts = {
  family: {
    Roboto: "Roboto",
  },
  sizes: {
    title: 30,
    navigation: 17,
    text: 16,
    comments: 13,
    subtitle: 13,
    lightText: 11,
    date: 10,
  },
  weights: {
    regular: "400",
    medium: "500",
    bold: "700",
  },
};

// Об'єкт для міжбуквенних інтервалів
const LetterSpacings = {
  title: 0.3,
  navigation: -0.41,
};

// Об'єкт для висот рядків
const LineHeights = {
  date: 12,
  lightText: 13,
  subtitle: 15,
  comments: 18,
  text: 19,
  navigation: 22,
  title: 35,
};

// Об'єкт для закруглення країв
const BorderRadius = {
  comment: 6,
  input: 8,
  contentBlock: 8,
  avatar: 16,
  container: 24,
  button: 100,
};

// Об'єкт для внутрішніх відступів
const Padding = {
  input: 16,
  buttonVertical: 16,
  buttonHorizontal: 32,
};

// Об'єкт для зовнішніх відступів
const Margin = {
  smallIconText: 4, // Відступи від іконки до тексту
  mediumIconText: 6, // Відступи від іконки до тексту (інший варіант)
  regular: 16, // Відступи між елементами в окремому блоці
  block: 32, // Відступи між блоками
  buttonBlock: 44, // Відступ від блоку кнопок
  date: 8, // Відступ до дати
};

// Експорт об'єктів
export {
  Colors,
  Fonts,
  LetterSpacings,
  LineHeights,
  BorderRadius,
  Padding,
  Margin,
};
