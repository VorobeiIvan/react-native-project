import React from "react";
import { SvgUri } from "react-native-svg";
import { View } from "react-native";
import styles from "./IconStyles";

type IconProps = {
  uri: string;
  width?: number;
  height?: number;
};

const Icon: React.FC<IconProps> = ({ uri, width = 24, height = 24 }) => {
  if (!uri) {
    console.error("URI для іконки не передано!");
    return null;
  }

  return (
    <View style={styles.iconContainer}>
      <SvgUri width={width} height={height} uri={uri} />
    </View>
  );
};

export default Icon;
