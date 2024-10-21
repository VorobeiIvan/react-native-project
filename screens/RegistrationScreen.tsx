import { ImageBackground, View } from "react-native";
import { Avatar, RegistrationForm, Title } from "../components";
import { images } from "../utils";

import styles from "./ScreenStyles";

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.bg}
        resizeMode="cover"
        style={styles.image}
      />

      <View style={styles.contentContainer}>
        <Avatar />
        <Title text="Реєстрація" />
        <RegistrationForm />
      </View>
    </View>
  );
};

export default RegistrationScreen;
