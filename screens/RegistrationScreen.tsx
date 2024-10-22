import { Avatar, CustomImage, RegistrationForm, Title } from "../components";

import IMAGES from "../constants/images";
import Container from "../components/Containers/Container";
import { TITLE } from "../constants";

const RegistrationScreen = () => {
  return (
    <Container type="container">
      <CustomImage source={IMAGES.MAIN_BACKGROUND} type={"backgroundImage"} />
      <Container type="contentContainer">
        <Avatar />
        <Title text={TITLE.MAIN_TITLE_REGISTRATION} />
        <RegistrationForm />
      </Container>
    </Container>
  );
};

export default RegistrationScreen;
