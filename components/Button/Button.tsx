import { FC } from "react";
import {
  Text,
  TouchableOpacity,
  ViewStyle,
  Image,
  ImageSourcePropType,
} from "react-native";

import Icon from "../Icon/Icon";

import styles from "./ButtonStyles";

type ButtonProps = {
  children?: React.ReactNode;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  text?: string;
  imageSource?: ImageSourcePropType; // Виправлений тип для зображення
  iconUri?: string; // Додано тип для iconUri
};

const Button: FC<ButtonProps> = ({
  children,
  onPress,
  buttonStyle,
  text,
  imageSource,
  iconUri,
}) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      {iconUri && <Icon uri={iconUri} width={24} height={24} />}
      {imageSource && <Image source={imageSource} style={styles.image} />}
      {text && <Text style={styles.text}>{text}</Text>}
      {children}
    </TouchableOpacity>
  );
};

export default Button;
