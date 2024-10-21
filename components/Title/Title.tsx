import { FC } from "react";
import { Text } from "react-native";

import styles from "./TitleStyles";

type TitleProps = { text: string };

const Title: FC<TitleProps> = ({ text }) => {
  return <Text style={styles.title}>{text}</Text>;
};

export default Title;
