// Icon.tsx

import React from "react";
import { View } from "react-native";
// import Svg, { Path } from "react-native-svg";
import { ICONS } from "../../constants";

type IconProps = {
  name: keyof typeof ICONS;
  width?: number;
  height?: number;
};

const Icon: React.FC<IconProps> = ({ name, width = 24, height = 24 }) => {
  const IconComponent = ICONS[name];
  if (!IconComponent) {
    console.error("Іконка не знайдена!");
    return null;
  }

  return (
    <View style={{ width, height }}>
      <IconComponent width={width} height={height} />
    </View>
  );
};

export default Icon;
