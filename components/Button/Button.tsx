import { FC } from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./ButtonStyles";
import CustomImage from "../CustomImage/CustomImage";
import Icon from "../Icon/Icon";

type ButtonProps = {
  children?: React.ReactNode;
  onPress: () => void;
  imageSource?: string;
  iconUri?: string;
  imageType?: "image" | "backgroundImage";
  iconType?: keyof typeof styles;
  text?: string;
  type?: keyof typeof styles;
};

const Button: FC<ButtonProps> = ({
  children,
  onPress,
  imageType = "image",
  imageSource,
  iconUri,
  iconType = "icon",
  text = "",
  type = "button",
}) => {
  return (
    <TouchableOpacity style={[styles[type], styles.button]} onPress={onPress}>
      {iconUri && <Icon uri={iconUri} type={iconType} />}
      {imageSource && imageType && (
        <CustomImage type={imageType} source={imageSource} />
      )}
      {text && <Text style={styles.buttonText}>{text}</Text>}
      {children}
    </TouchableOpacity>
  );
};

export default Button;
