import { Avatar, AuthorizationForm, Title } from "../components";

import Container from "../components/Containers/Container";
import IMAGES from "../constants/images";
import CustomImage from "../components/CustomImage/CustomImage";

const LoginScreen = () => {
  return (
    <Container type={"container"}>
      <CustomImage source={IMAGES.MAIN_BACKGROUND} type={"backgroundImage"} />

      <Container type={"contentContainer"}>
        <Avatar />
        <Title text={"AUTHORIZATION_TITLE"} />
        <AuthorizationForm />
      </Container>
    </Container>
  );
};

export default LoginScreen;
