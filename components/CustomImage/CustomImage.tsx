import React from "react";
import { Image } from "react-native";
import styles from "./CustomImageStyles";

type ImgProps = {
  type?: keyof typeof styles;
  source: string;
};

const CustomImage: React.FC<ImgProps> = ({ type = "image", source }) => {
  return <Image source={{ uri: source }} style={styles[type]} />;
};

export default CustomImage;
