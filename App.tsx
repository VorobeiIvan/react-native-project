import { Container, CustomImage, Icon } from "./components";
import Title from "./components/Title/Title";
import { ICONS, IMAGES, TITLE } from "./constants";
import { RegistrationScreen } from "./screens";

export default function App() {
  return (
    <Container type={"container"}>
      <Icon name={ICONS.ADD_AVATAR_BUTTON} width={24} height={24} />
    </Container>
  );
}
