import { ImageBackground, View } from "react-native";
import { Avatar, AuthorizationForm, Title } from "../components";
import { images } from "../utils";

import styles from "./ScreenStyles";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.bg}
        resizeMode="cover"
        style={styles.image}
      />

      <View style={styles.contentContainer}>
        <Avatar />
        <Title text="Увійти" />
        <AuthorizationForm />
      </View>
    </View>
  );
};

export default LoginScreen;
