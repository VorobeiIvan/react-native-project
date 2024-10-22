import { ImageBackground } from "react-native";
import { Avatar, RegistrationForm, Title } from "../components";

import IMAGES from "../constants/images";
import Container from "../components/Containers/Container";

const RegistrationScreen = () => {
  return (
    <Container type="container">
      <Image source={IMAGES.MAIN_BACKGROUND} style={styles.image} />
      <Container type="contentContainer">
        <Avatar />
        <Title text="REGISTRATION_TITLE" />
        <RegistrationForm />
      </Container>
    </Container>
  );
};

export default RegistrationScreen;
