const colors: { [key: string]: string } = {
  white: "#FFFFFF",
  black_primary: "#212121",
  light_gray: "#F6F6F6",
  gray: "#9B9B9B",
  border_gray: "#E8E8E8",
  blue: "#1B4371",
  orange: "#FF6C00",
};

const fontFamily: { [key: string]: string } = {
  Roboto: "Roboto",
};

const fontWeights: { [key: string]: string } = {
  regular: "400",
  medium: "500",
  bold: "700",
};

const fontSizes: { [key: string]: number } = {
  title: 30,
  navigation: 17,
  text: 16,
  comments: 13,
  subtitle: 13,
  lightText: 11,
  date: 10,
};

const letterSpacings: { [key: string]: number } = {
  title: 0.3,
  navigation: -0.41,
};

const lineHeights: { [key: string]: number } = {
  date: 12,
  lightText: 13,
  subtitle: 15,
  comments: 18,
  text: 19,
  navigation: 22,
  title: 35,
};

const borderRadius: { [key: string]: number } = {
  comment: 6,
  input: 8,
  contentBlock: 8,
  avatar: 16,
  container: 24,
  button: 100,
};

const padding: { [key: string]: number } = {
  input: 16,
  buttonVertical: 16,
  buttonHorizontal: 32,
};

const margin: { [key: string]: number } = {
  smallIconText: 4, // Відступи від іконки до тексту
  mediumIconText: 6, // Відступи від іконки до тексту (інший варіант)
  regular: 16, // Відступи між елементами в окремому блоці
  block: 32, // Відступи між блоками
  buttonBlock: 44, // Відступ від блоку кнопок
  date: 8, // Відступ до дати
};

export {
  colors,
  fontFamily,
  fontWeights,
  fontSizes,
  letterSpacings,
  lineHeights,
  borderRadius,
  padding,
  margin,
};
