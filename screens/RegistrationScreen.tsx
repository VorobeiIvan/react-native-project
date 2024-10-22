import { ImageBackground} from "react-native";
import { Avatar, RegistrationForm, Title } from "../components";


import styles from "./ScreenStyles";
import IMAGES from "../constants/imageConstants";
import Container from "../components/Containers/Container";

const RegistrationScreen = () => {
  return (
    <Container type="container" >
      <ImageBackground
        source={IMAGES.MAIN_BACKGROUND}
        style={styles.image}
      />
      <Container type="contentContainer" >
        <Avatar />
        <Title text="REGISTRATION_TITLE" />
        <RegistrationForm />
      </Container>
    </Container>
  );
};

export default RegistrationScreen;
